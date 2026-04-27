// Vercel Serverless Function — Claude API proxy
// Layers of defense:
//  1. Origin check (reject if Origin header is set and not in allowlist)
//  2. Per-IP rate limit (best-effort, in-memory across warm invocations)
//  3. Allowlisted models + max_tokens cap (prevents cost-bomb via crafted body)

const ALLOWED_ORIGINS = ['https://startup-studio-sage.vercel.app'];
const ALLOWED_ORIGIN_RE = /^https:\/\/startup-studio-[a-z0-9-]+\.vercel\.app$/;
const ALLOWED_MODELS = new Set([
  'claude-sonnet-4-6',
  'claude-haiku-4-5-20251001',
]);
const MAX_TOKENS_CAP = 16000;
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;

const ipBuckets = new Map();

function isOriginAllowed(origin) {
  if (!origin) return true;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (ALLOWED_ORIGIN_RE.test(origin)) return true;
  if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) return true;
  return false;
}

function rateLimitOk(ip) {
  const now = Date.now();
  const bucket = (ipBuckets.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (bucket.length >= RATE_LIMIT_MAX) {
    ipBuckets.set(ip, bucket);
    return false;
  }
  bucket.push(now);
  ipBuckets.set(ip, bucket);
  return true;
}

export default async function handler(request, response) {
  const origin = request.headers.origin || '';
  const corsAllow = isOriginAllowed(origin) ? (origin || ALLOWED_ORIGINS[0]) : ALLOWED_ORIGINS[0];

  response.setHeader('Access-Control-Allow-Origin', corsAllow);
  response.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Vary', 'Origin');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }
  if (!isOriginAllowed(origin)) {
    return response.status(403).json({ error: 'Origin not allowed' });
  }

  const ip = (request.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || request.socket?.remoteAddress
    || 'unknown';
  if (!rateLimitOk(ip)) {
    return response.status(429).json({
      error: 'Too many requests',
      message: 'הגעת למגבלת השימוש. נסה שוב בעוד דקה.',
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'API key not configured' });
  }

  const body = request.body || {};
  if (!body.model || !ALLOWED_MODELS.has(body.model)) {
    return response.status(400).json({ error: 'Model not allowed' });
  }
  if (typeof body.max_tokens !== 'number' || body.max_tokens > MAX_TOKENS_CAP) {
    body.max_tokens = MAX_TOKENS_CAP;
  }

  try {
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });
    const data = await claudeResponse.json();
    if (!claudeResponse.ok) {
      console.error('Claude API error:', data);
      return response.status(claudeResponse.status).json(data);
    }
    return response.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    return response.status(500).json({
      error: 'Failed to call Claude API',
      message: error.message,
    });
  }
}
