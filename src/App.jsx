import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, Target, ArrowLeft, ArrowRight, Loader2, RefreshCw, Info, Rocket, Building2, Ruler, CheckCircle2, Lightbulb } from 'lucide-react';

export default function StartupStudio() {
  const [view, setView] = useState('home'); // home, business, space, results
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState(null); // 'business' or 'space'

  const [data, setData] = useState({
    // עסק
    businessName: '',
    industry: '',
    description: '',
    location: '',
    targetCustomer: '',
    mainChallenge: '',
    initialInvestment: '',
    monthlyFixedCosts: '',
    productPrice: '',
    variableCostPerUnit: '',
    expectedMonthlyUnits: '',
    employees: '',
    // מקום
    spaceSize: '',
    spaceShape: 'rectangle',
    spaceWidth: '',
    spaceLength: '',
    spaceType: '',
    mustHaveAreas: '',
    customerFlow: '',
    budget: ''
  });

  const update = (field, value) => setData({ ...data, [field]: value });

  // ----- שלבי תוכנית עסקית -----
  const businessSteps = [
    {
      title: 'הרעיון שלך',
      icon: <Lightbulb className="w-5 h-5" />,
      subtitle: 'ספר לי על העסק שאתה רוצה להקים',
      fields: [
        { key: 'businessName', label: 'שם העסק', placeholder: 'לדוגמה: קרוספיט BUX', type: 'text', required: true },
        { key: 'industry', label: 'תחום / ענף', placeholder: 'חדר כושר, מסעדה, חנות', type: 'text', required: true },
        { key: 'description', label: 'תיאור קצר', placeholder: 'מה העסק עושה? מה מיוחד בו?', type: 'textarea', required: true },
        { key: 'location', label: 'מיקום מתוכנן', placeholder: 'עיר / אזור', type: 'text' }
      ]
    },
    {
      title: 'לקוחות',
      icon: <Target className="w-5 h-5" />,
      subtitle: 'מי הולך לקנות? לא בטוח - דלג ואעזור',
      fields: [
        { key: 'targetCustomer', label: 'קהל יעד', placeholder: 'גיל, מאפיינים, צרכים', type: 'textarea' },
        { key: 'mainChallenge', label: 'האתגר הכי גדול שלך', placeholder: 'מה מדאיג אותך?', type: 'textarea' }
      ]
    },
    {
      title: 'מספרים',
      icon: <DollarSign className="w-5 h-5" />,
      subtitle: 'לא יודע? השאר ריק ואעריך לפי הענף',
      infoBox: 'כל שדה שתשאיר ריק - אציע לך הערכה ריאלית לפי סוג העסק, ואסביר איך הגעתי אליה.',
      fields: [
        { key: 'initialInvestment', label: 'השקעה התחלתית (₪)', placeholder: 'ציוד, שיפוצים, פיקדון', type: 'number' },
        { key: 'monthlyFixedCosts', label: 'הוצאות קבועות חודשיות (₪)', placeholder: 'שכירות, שכר, חשמל', type: 'number' },
        { key: 'productPrice', label: 'מחיר ממוצע ללקוח (₪)', placeholder: 'כמה לקוח משלם', type: 'number' },
        { key: 'expectedMonthlyUnits', label: 'לקוחות/עסקאות בחודש', placeholder: 'כמות ריאלית', type: 'number' }
      ]
    }
  ];

  // ----- שלבי תכנון אדריכלי -----
  const spaceSteps = [
    {
      title: 'על המקום',
      icon: <Building2 className="w-5 h-5" />,
      subtitle: 'ספר לי על השטח שיש לך',
      fields: [
        { key: 'spaceType', label: 'סוג העסק', placeholder: 'חדר כושר, מסעדה, קליניקה', type: 'text', required: true },
        { key: 'spaceSize', label: 'שטח כולל (מ״ר)', placeholder: '200', type: 'number', required: true },
        { key: 'spaceWidth', label: 'רוחב (מטר)', placeholder: '10', type: 'number' },
        { key: 'spaceLength', label: 'אורך (מטר)', placeholder: '20', type: 'number' }
      ]
    },
    {
      title: 'מה צריך בפנים',
      icon: <Ruler className="w-5 h-5" />,
      subtitle: 'אילו אזורים חייבים להיות?',
      fields: [
        { key: 'mustHaveAreas', label: 'אזורים נדרשים', placeholder: 'לדוגמה: קבלה, אזור אימון, מלתחות, שירותים, משרד', type: 'textarea', required: true },
        { key: 'customerFlow', label: 'איך לקוח עובר במקום?', placeholder: 'לדוגמה: נכנס, מתקבל בקבלה, עובר למלתחה, לאזור האימון', type: 'textarea' },
        { key: 'budget', label: 'תקציב לשיפוץ (₪)', placeholder: 'אופציונלי', type: 'number' }
      ]
    }
  ];

  const activeSteps = mode === 'business' ? businessSteps : spaceSteps;

  const isStepValid = () => {
    return activeSteps[step].fields.every(f => {
      if (!f.required) return true;
      const v = data[f.key];
      return v && v.toString().trim() !== '';
    });
  };

  // ----- יצירת תוכנית עסקית -----
  const generateBusinessPlan = async () => {
    setLoading(true);
    setLoadingMessage('מנתח את הרעיון שלך...');
    
    setTimeout(() => setLoadingMessage('מעריך מספרים ריאליים לפי הענף...'), 2000);
    setTimeout(() => setLoadingMessage('בונה אסטרטגיית שיווק מותאמת...'), 4000);
    setTimeout(() => setLoadingMessage('מכין את התוכנית הסופית...'), 6000);

    try {
      const fv = (k, fb) => (data[k] && data[k].toString().trim() !== '') ? data[k] : fb;

      const prompt = `אתה יועץ עסקי מנוסה המתמחה בליווי יזמים ישראלים בתחילת דרכם. בנה תוכנית עסקית מעשית בעברית בלבד.

פרטי העסק:
- שם: ${data.businessName}
- תחום: ${data.industry}
- תיאור: ${data.description}
- מיקום: ${fv('location', 'לא צוין')}
- קהל יעד: ${fv('targetCustomer', 'לא הוגדר - הצע קהל יעד')}
- אתגר: ${fv('mainChallenge', 'לא צוין')}

מספרים (ריק = אתה מעריך):
- השקעה: ${fv('initialInvestment', 'הערך לפי הענף')} ₪
- הוצאות חודשיות: ${fv('monthlyFixedCosts', 'הערך')} ₪
- מחיר: ${fv('productPrice', 'הצע טווח')} ₪
- לקוחות/חודש: ${fv('expectedMonthlyUnits', 'הערך ריאלי')}

החזר JSON בלבד ללא טקסט נוסף:
{
  "executiveSummary": "3-4 משפטים על הפוטנציאל",
  "assumptionsMade": ["הנחה 1 והבסיס שלה", "הנחה 2"],
  "monthlyRevenue": הכנסה חודשית,
  "monthlyProfit": רווח חודשי,
  "yearlyProfit": רווח שנתי,
  "breakEvenMonths": חודשים להחזר השקעה,
  "breakEvenUnits": יחידות לנקודת איזון,
  "swot": {
    "strengths": ["3 חוזקות"],
    "weaknesses": ["3 חולשות"],
    "opportunities": ["3 הזדמנויות"],
    "threats": ["3 איומים"]
  },
  "marketingStrategy": ["4 טקטיקות שיווק מעשיות"],
  "risks": ["3 סיכונים + איך להתמודד"],
  "firstThreeMonths": ["פעולה חודש 1", "חודש 2", "חודש 3"],
  "recommendation": "המלצה כנה - האם להתקדם, מה לשפר"
}`;

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          messages: [{ role: "user", content: prompt }]
        })
      });

      const apiData = await response.json();
      const text = apiData.content.filter(i => i.type === "text").map(i => i.text).join("\n");
      const clean = text.replace(/```json|```/g, "").trim();
      setResult(JSON.parse(clean));
      setView('results');
    } catch (err) {
      console.error(err);
      alert('אירעה שגיאה. נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  // ----- יצירת תכנון אדריכלי -----
  const generateSpacePlan = async () => {
    setLoading(true);
    setLoadingMessage('בודק את מידות המקום...');
    setTimeout(() => setLoadingMessage('מתכנן את חלוקת האזורים...'), 2000);
    setTimeout(() => setLoadingMessage('מחשב נקודות חשמל ואינסטלציה...'), 5000);
    setTimeout(() => setLoadingMessage('בוחר ריהוט וציוד מותאם...'), 8000);
    setTimeout(() => setLoadingMessage('מסיים את המפרט הטכני...'), 11000);

    try {
      const fv = (k, fb) => (data[k] && data[k].toString().trim() !== '') ? data[k] : fb;
      const width = parseFloat(data.spaceWidth) || 10;
      const length = parseFloat(data.spaceLength) || 20;

      const prompt = `אתה אדריכל ומתכנן פנים מומחה לחללים מסחריים בישראל, עם ידע מקצועי בתקנים הישראליים לנקודות חשמל, אינסטלציה, ושירותים ציבוריים. תכנן תוכנית חלוקת מקום ריאלית ומפרט טכני מלא. ענה בעברית בלבד.

מידע על המקום:
- סוג עסק: ${data.spaceType}
- שטח כולל: ${data.spaceSize} מ״ר
- רוחב: ${width} מטר
- אורך: ${length} מטר
- אזורים נדרשים: ${data.mustHaveAreas}
- זרימת לקוח: ${fv('customerFlow', 'תכנן זרימה הגיונית')}
- תקציב שיפוץ: ${fv('budget', 'הערך')} ₪

תכנן את המקום עם אזורים מלבניים. כל אזור צריך להיות במיקום הגיוני.
קואורדינטות: (0,0) = פינה שמאלית עליונה. x גדל ימינה, y גדל למטה. המקום כולו: 0,0 עד ${width},${length}.

חשוב מאוד: לכל אזור תן מפרט טכני מפורט הכולל:
- מספר נקודות חשמל, גובה שלהן מהרצפה, וסוג (16A רגיל / 32A לציוד כבד / 220V / 380V תלת-פאזי)
- אינסטלציה (מים חמים/קרים, ניקוז, מגדילי לחץ)
- ריהוט וציוד ספציפי עם מידות ודגמים מומלצים
- תאורה (כמות גופי תאורה, סוג - LED/פלורסנט, עוצמת lux)
- מיזוג ואוורור
- חיפוי רצפה וקירות מומלץ

לשירותים: השתמש בתקן הישראלי - לעסק עם עובדים/לקוחות צריך לפחות שירותים נגישים, ומספר נוסף לפי כמות צפויה (1 שירותים לכל 15-20 לקוחות במקביל).
למקלחות: בחדר כושר/ספא - לפחות 2 מקלחות לכל 50 מתאמנים במקביל.

החזר JSON בלבד:
{
  "layoutSummary": "הסבר קצר של 2-3 משפטים על התכנון",
  "zones": [
    {
      "name": "שם האזור",
      "x": מיקום x במטרים,
      "y": מיקום y במטרים,
      "width": רוחב במטרים,
      "height": אורך במטרים,
      "color": "צבע בהיר פסטל - #XXXXXX",
      "description": "מה באזור ולמה הוא שם",
      "technicalSpec": {
        "electricity": {
          "outlets": "מספר נקודות חשמל ותיאור (למשל: 6 שקעים דו-פאזיים בגובה 30 ס״מ, 2 שקעי 16A בגובה 120 ס״מ לציוד)",
          "specialPower": "ציוד כבד/תלת-פאזי אם נדרש (למשל: 32A תלת-פאזי לתנור, נקודת 380V למכשיר)",
          "lighting": "תאורה מומלצת (למשל: 8 נקודות תאורת LED ב-4000K, 500 lux)"
        },
        "plumbing": "אינסטלציה - מים חמים/קרים, ניקוז (אם רלוונטי)",
        "furniture": ["פריט ריהוט 1 עם מידות (למשל: שולחן קבלה 180x80 ס״מ)", "פריט 2", "פריט 3"],
        "equipment": ["ציוד 1 עם המלצה (למשל: מקרר אמריקאי 600 ליטר - Samsung/LG)", "ציוד 2"],
        "flooring": "חיפוי רצפה מומלץ (למשל: PVC תעשייתי נגד החלקה)",
        "walls": "חיפוי קירות (למשל: צבע לטקס שטיף, ניתן לניקוי)",
        "hvac": "מיזוג ואוורור (למשל: מזגן 3 כ״ס, מפוח יניקה)",
        "specialNotes": "הערות מיוחדות אם יש"
      }
    }
  ],
  "flowPath": "הסבר זרימת לקוח",
  "bathroomsAndShowers": {
    "toiletsRequired": מספר שירותים נדרשים,
    "showersRequired": מספר מקלחות (0 אם לא רלוונטי),
    "accessibleRequired": מספר יחידות נגישות (תקן),
    "explanation": "הסבר למה נדרש המספר הזה לפי התקן והצפי שלך"
  },
  "overallElectrical": {
    "totalOutlets": סך נקודות חשמל במקום,
    "threePhaseNeeded": true/false,
    "mainBoardRecommendation": "המלצה ללוח חשמל ראשי (למשל: לוח 24 נקיעות עם מגיני פחת)",
    "totalConsumptionKW": צריכה משוערת בקילו-וואט
  },
  "keyRecommendations": ["4-5 המלצות אדריכליות חשובות"],
  "costBreakdown": {
    "electrical": עלות חשמל,
    "plumbing": עלות אינסטלציה,
    "furniture": עלות ריהוט,
    "equipment": עלות ציוד,
    "flooring": עלות רצפה,
    "construction": עלות בנייה וגבס,
    "hvac": עלות מיזוג,
    "total": סך הכל
  },
  "estimatedRenovationCost": סכום משוער כולל,
  "timeline": "זמן משוער להקמה"
}

חשוב:
1. האזורים לא יחפפו - בדוק שהקואורדינטות הגיוניות
2. צבעי פסטל רכים
3. כל המפרטים חייבים להיות ריאליים לישראל 2024-2025`;

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 8000,
          messages: [{ role: "user", content: prompt }]
        })
      });

      const apiData = await response.json();
      const text = apiData.content.filter(i => i.type === "text").map(i => i.text).join("\n");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      parsed.spaceWidth = width;
      parsed.spaceLength = length;
      setResult(parsed);
      setView('results');
    } catch (err) {
      console.error(err);
      alert('אירעה שגיאה. נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step < activeSteps.length - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (mode === 'business') generateBusinessPlan();
      else generateSpacePlan();
    }
  };

  const reset = () => {
    setView('home');
    setStep(0);
    setMode(null);
    setResult(null);
    setData({
      businessName: '', industry: '', description: '', location: '',
      targetCustomer: '', mainChallenge: '', initialInvestment: '',
      monthlyFixedCosts: '', productPrice: '', variableCostPerUnit: '',
      expectedMonthlyUnits: '', employees: '',
      spaceSize: '', spaceShape: 'rectangle', spaceWidth: '',
      spaceLength: '', spaceType: '', mustHaveAreas: '',
      customerFlow: '', budget: ''
    });
  };

  const startMode = (m) => {
    setMode(m);
    setStep(0);
    setView(m);
  };

  const formatNum = (n) => {
    if (!n && n !== 0) return '0';
    return new Intl.NumberFormat('he-IL').format(Math.round(n));
  };

  // ========== HOME ==========
  if (view === 'home') {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center pt-8 pb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">כלי חינמי ליזמים בישראל</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              מהרעיון לעסק
              <br />
              <span className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ב-5 דקות
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-2">
              קבל תוכנית עסקית עם המספרים שלך
            </p>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              ותוכנית אדריכלית למקום שלך
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <button
              onClick={() => startMode('business')}
              className="group bg-white hover:bg-blue-50 border-2 border-transparent hover:border-blue-200 rounded-3xl p-8 text-right shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">תוכנית עסקית</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                ענה על כמה שאלות וקבל תוכנית מלאה: ניתוח SWOT, מספרים, אסטרטגיית שיווק, ותוכנית פעולה ל-3 חודשים
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                <span>התחל בניית תוכנית</span>
                <ArrowLeft className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => startMode('space')}
              className="group bg-white hover:bg-emerald-50 border-2 border-transparent hover:border-emerald-200 rounded-3xl p-8 text-right shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">תכנון אדריכלי ומפרט טכני</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                תוכנית חלוקה חזותית + מפרט טכני מלא: נקודות חשמל, אינסטלציה, ריהוט, מקלחות ושירותים, מיזוג ופירוט עלויות
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                <span>התחל תכנון מקום</span>
                <ArrowLeft className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-500">חינמי</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">5 דק׳</div>
              <div className="text-sm text-slate-500">זמן מילוי</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">AI</div>
              <div className="text-sm text-slate-500">מותאם אישית</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== LOADING ==========
  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 max-w-md w-full text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
            <Loader2 className="w-20 h-20 text-white animate-spin relative" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">עובד על זה...</h3>
          <p className="text-slate-600 min-h-[1.5rem] transition-all">{loadingMessage}</p>
        </div>
      </div>
    );
  }

  // ========== FORM ==========
  if (view === 'business' || view === 'space') {
    const currentStep = activeSteps[step];
    const totalSteps = activeSteps.length;
    const progress = ((step + 1) / totalSteps) * 100;

    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <div className="max-w-2xl mx-auto">
          {/* ניווט חזרה */}
          <button
            onClick={reset}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </button>

          {/* פרוגרס בר */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">
                שלב {step + 1} מתוך {totalSteps}
              </span>
              <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  mode === 'business' ? 'bg-gradient-to-l from-blue-500 to-indigo-600' : 'bg-gradient-to-l from-emerald-500 to-teal-600'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* כרטיס הטופס */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
            <div className="mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                mode === 'business' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-emerald-500 to-teal-600'
              }`}>
                <div className="text-white">{currentStep.icon}</div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentStep.title}</h2>
              {currentStep.subtitle && (
                <p className="text-slate-500">{currentStep.subtitle}</p>
              )}
            </div>

            {currentStep.infoBox && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 leading-relaxed">{currentStep.infoBox}</p>
              </div>
            )}

            <div className="space-y-5">
              {currentStep.fields.map(field => {
                const value = data[field.key];
                const isFilled = value && value.toString().trim() !== '';
                return (
                  <div key={field.key}>
                    <label className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
                      <span>
                        {field.label}
                        {field.required && <span className="text-red-500 mr-1">*</span>}
                      </span>
                      {!field.required && (
                        <span className="text-xs text-slate-400 font-normal">לא חובה</span>
                      )}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={value}
                        onChange={(e) => update(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-offset-1 focus:border-transparent outline-none transition ${
                          isFilled
                            ? mode === 'business' ? 'border-blue-200 bg-blue-50/30 focus:ring-blue-400' : 'border-emerald-200 bg-emerald-50/30 focus:ring-emerald-400'
                            : 'border-slate-200 focus:ring-blue-400'
                        }`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={value}
                        onChange={(e) => update(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-offset-1 focus:border-transparent outline-none transition ${
                          isFilled
                            ? mode === 'business' ? 'border-blue-200 bg-blue-50/30 focus:ring-blue-400' : 'border-emerald-200 bg-emerald-50/30 focus:ring-emerald-400'
                            : 'border-slate-200 focus:ring-blue-400'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-3.5 text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition font-semibold flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  חזרה
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition font-semibold text-white shadow-lg disabled:bg-slate-300 disabled:cursor-not-allowed disabled:shadow-none ${
                  mode === 'business'
                    ? 'bg-gradient-to-l from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                    : 'bg-gradient-to-l from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'
                }`}
              >
                {step === totalSteps - 1 ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    {mode === 'business' ? 'בנה לי תוכנית עסקית' : 'תכנן לי את המקום'}
                  </>
                ) : (
                  <>
                    המשך
                    <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== RESULTS - BUSINESS PLAN ==========
  if (view === 'results' && mode === 'business' && result) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <div className="max-w-4xl mx-auto space-y-5">
          {/* כותרת */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>התוכנית העסקית שלך מוכנה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{data.businessName}</h1>
            <p className="text-blue-100 leading-relaxed md:text-lg">{result.executiveSummary}</p>
          </div>

          {/* הערכות */}
          {result.assumptionsMade && result.assumptionsMade.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" />
                הנחות שעשיתי (מה שלא סיפקת)
              </h3>
              <ul className="space-y-2">
                {result.assumptionsMade.map((a, i) => (
                  <li key={i} className="text-sm text-amber-900 flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* מספרים */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'הכנסה חודשית', value: `₪${formatNum(result.monthlyRevenue)}`, color: 'text-slate-900' },
              { label: 'רווח חודשי', value: `₪${formatNum(result.monthlyProfit)}`, color: result.monthlyProfit >= 0 ? 'text-emerald-600' : 'text-red-600' },
              { label: 'נקודת איזון', value: `${formatNum(result.breakEvenUnits)} יח׳`, color: 'text-slate-900' },
              { label: 'החזר השקעה', value: `${result.breakEvenMonths} חודשים`, color: 'text-slate-900' }
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-5">
                <div className="text-xs text-slate-500 mb-1">{kpi.label}</div>
                <div className={`text-xl md:text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* SWOT */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">ניתוח SWOT</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: 'חוזקות', items: result.swot.strengths, bg: 'bg-emerald-50', text: 'text-emerald-900', label: 'text-emerald-900' },
                { title: 'חולשות', items: result.swot.weaknesses, bg: 'bg-red-50', text: 'text-red-900', label: 'text-red-900' },
                { title: 'הזדמנויות', items: result.swot.opportunities, bg: 'bg-blue-50', text: 'text-blue-900', label: 'text-blue-900' },
                { title: 'איומים', items: result.swot.threats, bg: 'bg-amber-50', text: 'text-amber-900', label: 'text-amber-900' }
              ].map((q, i) => (
                <div key={i} className={`${q.bg} rounded-2xl p-4`}>
                  <h4 className={`font-bold ${q.label} mb-2`}>{q.title}</h4>
                  <ul className={`space-y-1.5 text-sm ${q.text}`}>
                    {q.items.map((x, j) => <li key={j}>• {x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* שיווק */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">אסטרטגיית שיווק</h3>
            <div className="space-y-3">
              {result.marketingStrategy.map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 חודשים */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">3 החודשים הראשונים</h3>
            <div className="space-y-3">
              {result.firstThreeMonths.map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-l from-blue-50 to-transparent rounded-xl border-r-4 border-blue-500">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
                    חודש {i + 1}
                  </div>
                  <span className="text-slate-700 leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* סיכונים */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">סיכונים וטיפול</h3>
            <ul className="space-y-2">
              {result.risks.map((r, i) => (
                <li key={i} className="p-4 bg-amber-50 border-r-4 border-amber-500 rounded-xl text-slate-700 leading-relaxed">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* המלצה */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="flex items-center gap-2 text-indigo-300 mb-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">ההמלצה שלי אליך</span>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-100">{result.recommendation}</p>
          </div>

          {/* פעולות */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition font-semibold shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              התחל מחדש
            </button>
            <button
              onClick={() => { setMode('space'); setStep(0); setView('space'); setResult(null); }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition font-semibold shadow-lg"
            >
              <Building2 className="w-4 h-4" />
              עכשיו תכנן לי גם את המקום
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========== RESULTS - SPACE PLAN ==========
  if (view === 'results' && mode === 'space' && result) {
    const svgWidth = 800;
    const svgHeight = (result.spaceLength / result.spaceWidth) * svgWidth;
    const scaleX = svgWidth / result.spaceWidth;
    const scaleY = svgHeight / result.spaceLength;

    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-4 md:p-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <div className="max-w-5xl mx-auto space-y-5">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm mb-4">
              <Building2 className="w-4 h-4" />
              <span>התכנון האדריכלי שלך מוכן</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">תוכנית חלוקה - {data.spaceType}</h1>
            <p className="text-emerald-100 leading-relaxed md:text-lg">{result.layoutSummary}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-emerald-100">
              <span>📐 {data.spaceSize} מ״ר</span>
              <span>📏 {result.spaceWidth}×{result.spaceLength} מטר</span>
              <span>🏗️ {result.timeline}</span>
            </div>
          </div>

          {/* תוכנית SVG */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">תוכנית חלוקה</h3>
            <div className="bg-slate-50 rounded-2xl p-4 overflow-auto">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto"
                style={{ maxHeight: '600px' }}
              >
                {/* רקע */}
                <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#f8fafc" stroke="#1e293b" strokeWidth="3" />
                
                {/* רשת */}
                {Array.from({ length: Math.floor(result.spaceWidth) }).map((_, i) => (
                  <line key={`vx${i}`} x1={i * scaleX} y1="0" x2={i * scaleX} y2={svgHeight} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                ))}
                {Array.from({ length: Math.floor(result.spaceLength) }).map((_, i) => (
                  <line key={`hy${i}`} x1="0" y1={i * scaleY} x2={svgWidth} y2={i * scaleY} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                ))}
                
                {/* אזורים */}
                {result.zones.map((zone, i) => {
                  const x = zone.x * scaleX;
                  const y = zone.y * scaleY;
                  const w = zone.width * scaleX;
                  const h = zone.height * scaleY;
                  const fontSize = Math.min(w, h) / 7;
                  
                  return (
                    <g key={i}>
                      <rect
                        x={x}
                        y={y}
                        width={w}
                        height={h}
                        fill={zone.color || '#dbeafe'}
                        stroke="#475569"
                        strokeWidth="2"
                        opacity="0.85"
                      />
                      <text
                        x={x + w/2}
                        y={y + h/2 - fontSize/2}
                        textAnchor="middle"
                        fontSize={Math.min(fontSize, 22)}
                        fontWeight="bold"
                        fill="#1e293b"
                      >
                        {zone.name}
                      </text>
                      <text
                        x={x + w/2}
                        y={y + h/2 + fontSize/2 + 5}
                        textAnchor="middle"
                        fontSize={Math.min(fontSize * 0.7, 16)}
                        fill="#475569"
                      >
                        {(zone.width * zone.height).toFixed(1)} מ״ר
                      </text>
                    </g>
                  );
                })}
                
                {/* מידות */}
                <text x={svgWidth/2} y={svgHeight + 20} textAnchor="middle" fontSize="14" fill="#64748b" fontWeight="600">
                  {result.spaceWidth} מטר
                </text>
              </svg>
            </div>
            <p className="text-sm text-slate-500 text-center mt-3">
              📊 תוכנית סכמטית - המידות בקנה מידה יחסי
            </p>
          </div>

          {/* פירוט אזורים עם מפרט טכני */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">פירוט אזורים + מפרט טכני</h3>
            <div className="space-y-4">
              {result.zones.map((zone, i) => (
                <div key={i} className="p-5 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 transition">
                  {/* כותרת אזור */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: zone.color }}
                    >
                      <span className="text-xl font-bold text-slate-700">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-slate-900">{zone.name}</h4>
                      <p className="text-xs text-slate-500">{(zone.width * zone.height).toFixed(1)} מ״ר • {zone.width}×{zone.height} מ׳</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 pr-1">{zone.description}</p>

                  {/* מפרט טכני */}
                  {zone.technicalSpec && (
                    <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                      {/* חשמל */}
                      {zone.technicalSpec.electricity && (
                        <div className="border-r-4 border-yellow-400 pr-3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">⚡</span>
                            <h5 className="font-bold text-sm text-slate-900">חשמל ותאורה</h5>
                          </div>
                          {zone.technicalSpec.electricity.outlets && (
                            <p className="text-sm text-slate-700 mb-1">
                              <span className="font-semibold">שקעים:</span> {zone.technicalSpec.electricity.outlets}
                            </p>
                          )}
                          {zone.technicalSpec.electricity.specialPower && (
                            <p className="text-sm text-slate-700 mb-1">
                              <span className="font-semibold">ציוד מיוחד:</span> {zone.technicalSpec.electricity.specialPower}
                            </p>
                          )}
                          {zone.technicalSpec.electricity.lighting && (
                            <p className="text-sm text-slate-700">
                              <span className="font-semibold">תאורה:</span> {zone.technicalSpec.electricity.lighting}
                            </p>
                          )}
                        </div>
                      )}

                      {/* אינסטלציה */}
                      {zone.technicalSpec.plumbing && zone.technicalSpec.plumbing !== 'לא נדרש' && zone.technicalSpec.plumbing !== '' && (
                        <div className="border-r-4 border-blue-400 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">💧</span>
                            <h5 className="font-bold text-sm text-slate-900">אינסטלציה</h5>
                          </div>
                          <p className="text-sm text-slate-700">{zone.technicalSpec.plumbing}</p>
                        </div>
                      )}

                      {/* ריהוט */}
                      {zone.technicalSpec.furniture && zone.technicalSpec.furniture.length > 0 && (
                        <div className="border-r-4 border-amber-400 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">🪑</span>
                            <h5 className="font-bold text-sm text-slate-900">ריהוט</h5>
                          </div>
                          <ul className="text-sm text-slate-700 space-y-0.5">
                            {zone.technicalSpec.furniture.map((f, j) => (
                              <li key={j}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* ציוד */}
                      {zone.technicalSpec.equipment && zone.technicalSpec.equipment.length > 0 && (
                        <div className="border-r-4 border-purple-400 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">🔧</span>
                            <h5 className="font-bold text-sm text-slate-900">ציוד</h5>
                          </div>
                          <ul className="text-sm text-slate-700 space-y-0.5">
                            {zone.technicalSpec.equipment.map((e, j) => (
                              <li key={j}>• {e}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* חיפויים */}
                      {(zone.technicalSpec.flooring || zone.technicalSpec.walls) && (
                        <div className="border-r-4 border-stone-400 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">🎨</span>
                            <h5 className="font-bold text-sm text-slate-900">חיפויים</h5>
                          </div>
                          {zone.technicalSpec.flooring && (
                            <p className="text-sm text-slate-700 mb-1">
                              <span className="font-semibold">רצפה:</span> {zone.technicalSpec.flooring}
                            </p>
                          )}
                          {zone.technicalSpec.walls && (
                            <p className="text-sm text-slate-700">
                              <span className="font-semibold">קירות:</span> {zone.technicalSpec.walls}
                            </p>
                          )}
                        </div>
                      )}

                      {/* מיזוג */}
                      {zone.technicalSpec.hvac && (
                        <div className="border-r-4 border-cyan-400 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">❄️</span>
                            <h5 className="font-bold text-sm text-slate-900">מיזוג ואוורור</h5>
                          </div>
                          <p className="text-sm text-slate-700">{zone.technicalSpec.hvac}</p>
                        </div>
                      )}

                      {/* הערות מיוחדות */}
                      {zone.technicalSpec.specialNotes && (
                        <div className="border-r-4 border-red-400 pr-3 bg-red-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">⚠️</span>
                            <h5 className="font-bold text-sm text-slate-900">שים לב</h5>
                          </div>
                          <p className="text-sm text-slate-700">{zone.technicalSpec.specialNotes}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* שירותים ומקלחות */}
          {result.bathroomsAndShowers && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                🚻 שירותים ומקלחות
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-900">{result.bathroomsAndShowers.toiletsRequired}</div>
                  <div className="text-sm text-blue-700 mt-1">שירותים נדרשים</div>
                </div>
                {result.bathroomsAndShowers.showersRequired > 0 && (
                  <div className="bg-cyan-50 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-900">{result.bathroomsAndShowers.showersRequired}</div>
                    <div className="text-sm text-cyan-700 mt-1">מקלחות</div>
                  </div>
                )}
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-900">{result.bathroomsAndShowers.accessibleRequired}</div>
                  <div className="text-sm text-amber-700 mt-1">יחידות נגישות</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold">למה המספר הזה? </span>
                {result.bathroomsAndShowers.explanation}
              </div>
            </div>
          )}

          {/* חשמל כללי */}
          {result.overallElectrical && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                ⚡ סיכום חשמל כולל
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-900">{result.overallElectrical.totalOutlets}</div>
                  <div className="text-sm text-yellow-700 mt-1">סך נקודות חשמל</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-900">{result.overallElectrical.totalConsumptionKW}</div>
                  <div className="text-sm text-orange-700 mt-1">קילו-וואט צריכה</div>
                </div>
                <div className={`rounded-xl p-4 text-center ${result.overallElectrical.threePhaseNeeded ? 'bg-red-50' : 'bg-green-50'}`}>
                  <div className={`text-xl font-bold ${result.overallElectrical.threePhaseNeeded ? 'text-red-900' : 'text-green-900'}`}>
                    {result.overallElectrical.threePhaseNeeded ? 'נדרש' : 'לא נדרש'}
                  </div>
                  <div className={`text-sm mt-1 ${result.overallElectrical.threePhaseNeeded ? 'text-red-700' : 'text-green-700'}`}>
                    חשמל תלת-פאזי
                  </div>
                </div>
              </div>
              {result.overallElectrical.mainBoardRecommendation && (
                <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold">לוח חשמל מומלץ: </span>
                  {result.overallElectrical.mainBoardRecommendation}
                </div>
              )}
            </div>
          )}

          {/* זרימת לקוח */}
          <div className="bg-gradient-to-l from-blue-50 to-emerald-50 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              🚶 זרימת לקוח במקום
            </h3>
            <p className="text-slate-700 leading-relaxed">{result.flowPath}</p>
          </div>

          {/* המלצות */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">המלצות אדריכליות</h3>
            <div className="space-y-3">
              {result.keyRecommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* עלות משוערת עם פירוט */}
          {result.estimatedRenovationCost && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-emerald-300 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-medium">הערכת עלות שיפוץ והקמה</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-4">₪{formatNum(result.estimatedRenovationCost)}</div>

              {result.costBreakdown && (
                <div className="bg-slate-800/50 rounded-2xl p-4 mb-4">
                  <div className="text-sm text-slate-300 mb-3 font-medium">פירוט עלויות:</div>
                  <div className="space-y-2">
                    {[
                      { label: '⚡ חשמל', value: result.costBreakdown.electrical },
                      { label: '💧 אינסטלציה', value: result.costBreakdown.plumbing },
                      { label: '🪑 ריהוט', value: result.costBreakdown.furniture },
                      { label: '🔧 ציוד', value: result.costBreakdown.equipment },
                      { label: '🎨 רצפה וחיפויים', value: result.costBreakdown.flooring },
                      { label: '🏗️ בנייה וגבס', value: result.costBreakdown.construction },
                      { label: '❄️ מיזוג אוויר', value: result.costBreakdown.hvac }
                    ].filter(item => item.value).map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm border-b border-slate-700/50 pb-2 last:border-0">
                        <span className="text-slate-200">{item.label}</span>
                        <span className="font-semibold text-white">₪{formatNum(item.value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-slate-300 text-sm">
                💡 הערכה ראשונית בלבד. מומלץ לקבל הצעות מחיר מ-3 קבלנים לפחות לפני קבלת החלטות.
              </p>
            </div>
          )}

          {/* פעולות */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition font-semibold shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              התחל מחדש
            </button>
            <button
              onClick={() => { setMode('business'); setStep(0); setView('business'); setResult(null); }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-l from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition font-semibold shadow-lg"
            >
              <Rocket className="w-4 h-4" />
              עכשיו בנה לי תוכנית עסקית
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
