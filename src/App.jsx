import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, Target, ArrowLeft, ArrowRight, Loader2, RefreshCw, Info, Rocket, Building2, Ruler, CheckCircle2, Lightbulb, Users, BarChart3, Briefcase, Shield, Compass, Megaphone, Settings as SettingsIcon } from 'lucide-react';

export default function StartupStudio() {
  const [view, setView] = useState('home');
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState(null);

  const [data, setData] = useState({
    // שלב 1 - הרעיון
    businessName: '',
    industry: '',
    description: '',
    location: '',
    whyThisIdea: '',
    uniqueValue: '',
    // שלב 2 - שוק ומתחרים
    targetCustomer: '',
    customerProblem: '',
    competitors: '',
    marketSize: '',
    differentiation: '',
    // שלב 3 - מודל עסקי ותמחור
    revenueModel: '',
    productPrice: '',
    competitorPricing: '',
    // שלב 4 - מימון והשקעות
    initialInvestment: '',
    monthlyFixedCosts: '',
    fundingSource: '',
    runwayMonths: '',
    expectedMonthlyUnits: '',
    // שלב 5 - תפעול ולוגיסטיקה
    operationsMode: '',
    suppliers: '',
    location_type: '',
    technology: '',
    // שלב 6 - כוח אדם ושיווק
    employees: '',
    rolesNeeded: '',
    marketingChannels: '',
    monthlyMarketingBudget: '',
    // שלב 7 - סיכונים וחזון
    mainRisks: '',
    regulation: '',
    yearOneGoals: '',
    yearThreeVision: '',
    exitStrategy: '',
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

  // ----- שלבי תוכנית עסקית - 7 שלבים מקצועיים -----
  const businessSteps = [
    {
      title: 'הרעיון והחזון',
      icon: <Lightbulb className="w-5 h-5" />,
      subtitle: 'בוא נכיר את העסק שלך',
      infoBox: 'יזמים מובילים בעולם מתחילים תמיד מ"למה" - למה דווקא העסק הזה? התשובה הזו היא היסוד לכל החלטה עתידית.',
      fields: [
        { key: 'businessName', label: 'שם העסק', placeholder: 'לדוגמה: קרוספיט BUX', help: 'אם עוד לא בחרת שם, כתוב שם זמני', type: 'text', required: true },
        { key: 'industry', label: 'תחום / ענף', placeholder: 'חדר כושר, מסעדה, חנות, שירות דיגיטלי', type: 'text', required: true },
        { key: 'description', label: 'תיאור העסק', placeholder: 'מה העסק עושה? איזה מוצר/שירות אתה מספק?', help: 'תאר ב-2-3 משפטים מה בדיוק העסק יעשה', type: 'textarea', required: true },
        { key: 'whyThisIdea', label: 'למה דווקא הרעיון הזה?', placeholder: 'מה גרם לך להחליט להקים את העסק הזה?', help: 'סיפור אישי, חוויה, צורך שראית - יזמים שמחוברים לרעיון מצליחים יותר', type: 'textarea', required: true },
        { key: 'uniqueValue', label: 'מה מיוחד בעסק שלך?', placeholder: 'מה תיתן ללקוחות שאחרים לא נותנים?', help: 'זה ה-USP שלך - הסיבה שלקוח יבחר בך ולא במתחרה', type: 'textarea', required: true },
        { key: 'location', label: 'מיקום פיזי מתוכנן', placeholder: 'עיר, אזור, או "אונליין בלבד"', type: 'text' }
      ]
    },
    {
      title: 'שוק ומתחרים',
      icon: <BarChart3 className="w-5 h-5" />,
      subtitle: 'מי הלקוחות שלך ומי המתחרים?',
      infoBox: 'Peter Drucker אמר: "המטרה של עסק היא ליצור לקוח". בלי להבין מי הלקוח שלך ומה הוא צריך - אי אפשר לבנות עסק מצליח.',
      fields: [
        { key: 'targetCustomer', label: 'מי הלקוח האידאלי שלך?', placeholder: 'גיל, מין, מאפיינים, מיקום, הכנסה, סגנון חיים', help: 'ככל שתהיה ספציפי יותר - תשיג אותם יותר טוב. לדוגמה: "נשים בגילאי 30-45 מאזור השרון, עם הכנסה ממוצעת ומעלה, שמחפשות איזון בין קריירה לכושר"', type: 'textarea', required: true },
        { key: 'customerProblem', label: 'איזו בעיה אתה פותר ללקוח?', placeholder: 'מה הכאב/הצורך שהמוצר שלך פותר?', help: 'לקוחות לא קונים מוצרים - הם קונים פתרונות לבעיות שלהם', type: 'textarea', required: true },
        { key: 'competitors', label: 'מי המתחרים שלך?', placeholder: 'שמות של 2-5 מתחרים ישירים או עקיפים', help: 'גם אם אין מתחרה ישיר - תמיד יש פתרון אלטרנטיבי שהלקוח כרגע משתמש בו', type: 'textarea', required: true },
        { key: 'differentiation', label: 'איך אתה שונה מהמתחרים?', placeholder: 'מחיר, איכות, שירות, חוויה, נישה ייחודית?', help: 'אם אתה זהה למתחרים - אין סיבה ללקוח לעבור אליך', type: 'textarea', required: true },
        { key: 'marketSize', label: 'גודל השוק המוערך באזור שלך', placeholder: 'כמה לקוחות פוטנציאליים יש?', help: 'אם לא יודע - השאר ריק ואני אעריך לפי האזור', type: 'text' }
      ]
    },
    {
      title: 'מודל עסקי ותמחור',
      icon: <DollarSign className="w-5 h-5" />,
      subtitle: 'איך תרוויח כסף?',
      infoBox: 'מודל עסקי טוב הוא ההבדל בין עסק שמתפרנס לבין עסק שמשגשג. חשוב על זה כמו על מנוע - איך הכסף נכנס, איך הוא יוצא, ואיך נשאר רווח.',
      fields: [
        { key: 'revenueModel', label: 'איך תקבל תשלום?', placeholder: 'תשלום חד פעמי / מנוי חודשי / לפי שימוש / עמלה / שילוב', help: 'מנוי = הכנסה צפויה. תשלום חד פעמי = הכנסה גבוהה אבל לא קבועה', type: 'textarea', required: true },
        { key: 'productPrice', label: 'מחיר ממוצע ללקוח (₪)', placeholder: '350', help: 'אם זה מנוי - מחיר חודשי. אם זה מוצר - מחיר ממוצע לעסקה', type: 'number' },
        { key: 'competitorPricing', label: 'מה המחירים אצל המתחרים?', placeholder: 'לדוגמה: יריב X גובה 400, יריב Y גובה 280', help: 'אופציונלי - יעזור לבדוק אם המחיר שלך תחרותי', type: 'textarea' }
      ]
    },
    {
      title: 'מימון והשקעות',
      icon: <Briefcase className="w-5 h-5" />,
      subtitle: 'כמה כסף צריך ומאיפה הוא יגיע?',
      infoBox: 'הסיבה #1 שעסקים נכשלים: תזרים מזומנים. אפילו עסקים רווחיים על הנייר נסגרים כי הכסף "לא בקופה" כשצריך לשלם משכורות. תכנון מימון נכון מציל עסקים.',
      fields: [
        { key: 'initialInvestment', label: 'השקעה התחלתית נדרשת (₪)', placeholder: '300000', help: 'כל מה שצריך כדי לפתוח: ציוד, שיפוצים, רישוי, פרסום ראשוני, פיקדון', type: 'number' },
        { key: 'monthlyFixedCosts', label: 'הוצאות חודשיות קבועות (₪)', placeholder: '50000', help: 'שכירות + שכר עובדים + חשמל + ביטוח + הוצאות שיש גם אם אין הכנסה', type: 'number' },
        { key: 'fundingSource', label: 'מאיפה הכסף יגיע?', placeholder: 'הון עצמי / הלוואה / משקיעים / הלוואה בערבות מדינה', help: 'אם משלב כמה מקורות - פרט בכמה כל אחד', type: 'textarea' },
        { key: 'runwayMonths', label: 'לכמה חודשים יש לך כסף עד שצריך להיות רווחי?', placeholder: '6', help: 'Runway - כמה זמן תוכל להחזיק את העסק גם אם אין הכנסות', type: 'number' },
        { key: 'expectedMonthlyUnits', label: 'כמה לקוחות/עסקאות צפויים בחודש?', placeholder: '120', help: 'הערכה ריאלית של מספר לקוחות חודשי קבוע אחרי 6 חודשי הקמה', type: 'number' }
      ]
    },
    {
      title: 'תפעול ולוגיסטיקה',
      icon: <SettingsIcon className="w-5 h-5" />,
      subtitle: 'איך העסק עובד מאחורי הקלעים?',
      infoBox: 'יזמים מתחילים מתמקדים בלקוח החיצוני, אבל מזניחים את התפעול הפנימי. עסק שלא יודע לתפעל את עצמו נחנק תוך חודשים.',
      fields: [
        { key: 'operationsMode', label: 'איך העסק יפעל?', placeholder: 'פיזי בלבד / אונליין בלבד / היברידי', help: 'כל אחד מצריך תשתית שונה לחלוטין', type: 'textarea', required: true },
        { key: 'suppliers', label: 'ספקים מרכזיים שתצטרך', placeholder: 'מי יספק לך חומרי גלם, ציוד, שירותים?', help: 'אופציונלי - אם רלוונטי לעסק שלך', type: 'textarea' },
        { key: 'location_type', label: 'סוג מיקום (אם פיזי)', placeholder: 'מרכז מסחרי / רחוב ראשי / אזור תעשייה / מהבית', help: 'מיקום משפיע על עלויות, חשיפה ועל סוג הלקוחות', type: 'text' },
        { key: 'technology', label: 'מערכות ותוכנות שתצטרך', placeholder: 'CRM, סליקה, ניהול מלאי, אתר, אפליקציה', help: 'הצמיחה הדיגיטלית היום קריטית - גם לעסק "פיזי"', type: 'textarea' }
      ]
    },
    {
      title: 'כוח אדם ושיווק',
      icon: <Megaphone className="w-5 h-5" />,
      subtitle: 'מי יעבוד אצלך ואיך תביא לקוחות?',
      infoBox: 'Reid Hoffman, מייסד LinkedIn, אמר: "לא משנה כמה הרעיון שלך טוב - בלי הצוות הנכון ושיווק נכון, הוא לא יראה אור יום".',
      fields: [
        { key: 'employees', label: 'כמה עובדים תצטרך בהתחלה?', placeholder: '3', help: 'כולל אותך. אל תזלזל - בלי אנשים אי אפשר לצמוח', type: 'number' },
        { key: 'rolesNeeded', label: 'אילו תפקידים?', placeholder: 'לדוגמה: 2 מאמנים, מקבלת קהל, מנהל שיווק', help: 'הגדר תפקידים, לא שמות. אז קל יותר לגייס', type: 'textarea' },
        { key: 'marketingChannels', label: 'איך תביא את הלקוחות הראשונים?', placeholder: 'אינסטגרם / פייסבוק / גוגל / חבר מביא חבר / שיווק מקומי', help: 'בחר 2-3 ערוצים עיקריים. עדיף להיות נהדר ב-2 מאשר בינוני ב-10', type: 'textarea', required: true },
        { key: 'monthlyMarketingBudget', label: 'תקציב שיווק חודשי (₪)', placeholder: '5000', help: 'מומלץ 5-15% מההכנסה החודשית הצפויה', type: 'number' }
      ]
    },
    {
      title: 'סיכונים וחזון לעתיד',
      icon: <Compass className="w-5 h-5" />,
      subtitle: 'מה יכול להשתבש ולאן אתה הולך?',
      infoBox: 'יזמים מצליחים לא בורחים מסיכונים - הם מזהים אותם, מודדים אותם, ומכינים תכנית לכל תרחיש. ובמקביל - שומרים על חזון ברור לאן הם הולכים.',
      fields: [
        { key: 'mainRisks', label: 'מה הכי מדאיג אותך?', placeholder: 'שוק לא בשל / חוסר ניסיון / תזרים / מתחרים גדולים', help: 'תהיה כן - זה החלק הכי חשוב בתכנון', type: 'textarea', required: true },
        { key: 'regulation', label: 'דרישות רישוי ורגולציה', placeholder: 'רישיון עסק, אישור משרד הבריאות, ביטוחים', help: 'אם לא יודע - השאר ריק ואני אגיד לך מה צריך לפי הענף', type: 'textarea' },
        { key: 'yearOneGoals', label: 'יעדים לסוף השנה הראשונה', placeholder: 'מה תיחשב להצלחה אחרי 12 חודשים?', help: 'מספר לקוחות, הכנסה, נקודת איזון - תהיה ספציפי', type: 'textarea', required: true },
        { key: 'yearThreeVision', label: 'איפה אתה רואה את העסק בעוד 3 שנים?', placeholder: 'סניף שני, מותג מוביל, יציאה לחו"ל, מכירה?', help: 'החזון מנחה כל החלטה ביומיום', type: 'textarea', required: true },
        { key: 'exitStrategy', label: 'אסטרטגיית יציאה (אופציונלי)', placeholder: 'מכירת העסק / העברה לדור הבא / IPO / לא מתכנן', help: 'גם אם אתה לא מתכנן למכור - חשוב לבנות עסק שאפשר למכור', type: 'text' }
      ]
    }
  ];

  // שלבי תכנון אדריכלי
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

  // ----- יצירת תוכנית עסקית מקצועית -----
  const generateBusinessPlan = async () => {
    setLoading(true);
    setLoadingMessage('מנתח את הרעיון לעומק...');
    
    setTimeout(() => setLoadingMessage('בוחן את השוק והמתחרים...'), 3000);
    setTimeout(() => setLoadingMessage('בונה מודל פיננסי מפורט...'), 6000);
    setTimeout(() => setLoadingMessage('מתכנן אסטרטגיית שיווק וגיוס...'), 9000);
    setTimeout(() => setLoadingMessage('מזהה סיכונים והזדמנויות...'), 12000);
    setTimeout(() => setLoadingMessage('מכין תוכנית פעולה מפורטת...'), 15000);

    try {
      const fv = (k, fb) => (data[k] && data[k].toString().trim() !== '') ? data[k] : fb;

      const prompt = `אתה צוות של יועצים עסקיים מהשורה הראשונה בעולם, המשלב את הגישות של:
- אריק ריס (Lean Startup)
- אלכס אוסטרוולדר (Business Model Canvas)
- מייקל פורטר (5 Forces, Competitive Strategy)
- W. Chan Kim (Blue Ocean Strategy)
- Peter Drucker (Management)
- Jim Collins (Good to Great)
- Reid Hoffman (Blitzscaling)

המטרה שלך: לבנות תוכנית עסקית מקיפה, מקצועית ומעשית עבור יזם מתחיל בישראל. התוכנית חייבת להיות ברמה של תוכנית שמגישים לבנק/משקיעים, אבל מוסברת בשפה שיזם מתחיל יכול להבין.

==== מידע מהיזם ====

🎯 הרעיון והחזון:
- שם העסק: ${data.businessName}
- תחום: ${data.industry}
- תיאור: ${data.description}
- למה דווקא הרעיון הזה: ${data.whyThisIdea}
- מה מיוחד בעסק: ${data.uniqueValue}
- מיקום: ${fv('location', 'לא צוין')}

📊 שוק ומתחרים:
- לקוח אידאלי: ${data.targetCustomer}
- בעיה שפותר: ${data.customerProblem}
- מתחרים: ${data.competitors}
- בידול: ${data.differentiation}
- גודל שוק: ${fv('marketSize', 'הערך לפי הענף והאזור')}

💰 מודל עסקי ותמחור:
- מודל הכנסות: ${data.revenueModel}
- מחיר ממוצע: ${fv('productPrice', 'הצע טווח מבוסס שוק')} ₪
- מחירי מתחרים: ${fv('competitorPricing', 'בדוק וציין')}

💵 מימון:
- השקעה התחלתית: ${fv('initialInvestment', 'הערך לפי הענף')} ₪
- הוצאות חודשיות קבועות: ${fv('monthlyFixedCosts', 'הערך')} ₪
- מקור מימון: ${fv('fundingSource', 'לא צוין - הצע אפשרויות')}
- Runway: ${fv('runwayMonths', '6')} חודשים
- לקוחות חודשיים צפויים: ${fv('expectedMonthlyUnits', 'הערך ריאלי')}

⚙️ תפעול:
- מצב פעילות: ${data.operationsMode}
- ספקים: ${fv('suppliers', 'הצע ספקים מרכזיים')}
- סוג מיקום: ${fv('location_type', 'הצע')}
- טכנולוגיה: ${fv('technology', 'הצע מערכות נדרשות')}

👥 צוות ושיווק:
- עובדים בהתחלה: ${fv('employees', 'הערך')}
- תפקידים: ${fv('rolesNeeded', 'הצע מבנה ארגוני')}
- ערוצי שיווק: ${data.marketingChannels}
- תקציב שיווק חודשי: ${fv('monthlyMarketingBudget', 'הערך 5-15% מהכנסה')} ₪

⚠️ סיכונים וחזון:
- חששות עיקריים: ${data.mainRisks}
- רגולציה: ${fv('regulation', 'בדוק לפי הענף ופרט מה צריך')}
- יעדי שנה ראשונה: ${data.yearOneGoals}
- חזון 3 שנים: ${data.yearThreeVision}
- אסטרטגיית יציאה: ${fv('exitStrategy', 'לא הוגדר')}

==== הוראות חשובות ====
1. כתוב הכל בעברית, בשפה ברורה ליזם מתחיל
2. כל תובנה חייבת להיות מעשית ופעילה - לא תיאוריה
3. השתמש במספרים ספציפיים, לא אמירות כלליות
4. הסבר את ה"למה" מאחורי כל המלצה
5. תהיה כנה - אם הרעיון בעייתי, אמור זאת בעדינות אבל בבירור

החזר JSON בלבד ללא טקסט נוסף, במבנה הבא בדיוק:

{
  "executiveSummary": "סיכום מנהלים של 4-5 משפטים: על מה העסק, פוטנציאל, סיכונים, והמלצה כללית",
  "assumptionsMade": ["הנחה ספציפית 1 + הבסיס המקצועי שלה", "הנחה 2", "הנחה 3"],
  
  "businessModelCanvas": {
    "valueProposition": "ההצעה הייחודית - מה הערך שמקבל הלקוח",
    "customerSegments": "פילוח לקוחות מדויק - 2-3 פלחים עיקריים",
    "channels": "ערוצי הפצה - איך מגיעים ללקוח",
    "customerRelationships": "סוג קשר עם לקוחות - אישי / אוטומטי / קהילתי",
    "revenueStreams": "מקורות הכנסה - לפחות 2 אם אפשר",
    "keyResources": "משאבי מפתח - אנושיים, פיזיים, פיננסיים, אינטלקטואליים",
    "keyActivities": "פעילויות מפתח - מה חייבים לעשות מצוין",
    "keyPartners": "שותפים אסטרטגיים נדרשים",
    "costStructure": "מבנה עלויות - קבוע מול משתנה"
  },
  
  "marketAnalysis": {
    "tam": "Total Addressable Market - גודל השוק הכללי בישראל בש״ח",
    "sam": "Serviceable Available Market - השוק שאתה יכול לפנות אליו",
    "som": "Serviceable Obtainable Market - מה ריאלי שתשיג ב-3 שנים",
    "marketTrends": ["3 מגמות שוק רלוונטיות"],
    "competitorAnalysis": [
      {"name": "מתחרה 1", "strengths": "חוזקות", "weaknesses": "חולשות", "yourAdvantage": "היתרון שלך מולו"}
    ]
  },
  
  "swot": {
    "strengths": ["4 חוזקות עם הסבר"],
    "weaknesses": ["4 חולשות עם הסבר"],
    "opportunities": ["4 הזדמנויות עם הסבר"],
    "threats": ["4 איומים עם הסבר"]
  },
  
  "financials": {
    "monthlyRevenue": הכנסה חודשית ממוצעת בשנה ראשונה,
    "monthlyVariableCosts": הוצאות משתנות חודשיות,
    "monthlyFixedCosts": הוצאות קבועות חודשיות,
    "monthlyProfit": רווח חודשי נטו,
    "yearlyProfit": רווח שנתי,
    "breakEvenMonths": חודשים להחזר השקעה,
    "breakEvenUnits": כמות לקוחות לנקודת איזון,
    "totalInvestment": השקעה כוללת נדרשת,
    "cashFlowYear1": [
      {"month": 1, "revenue": 0, "expenses": 0, "balance": 0},
      {"month": 2, "revenue": 0, "expenses": 0, "balance": 0},
      {"month": 3, "revenue": 0, "expenses": 0, "balance": 0},
      {"month": 6, "revenue": 0, "expenses": 0, "balance": 0},
      {"month": 9, "revenue": 0, "expenses": 0, "balance": 0},
      {"month": 12, "revenue": 0, "expenses": 0, "balance": 0}
    ],
    "fundingNeeded": סכום מימון נדרש,
    "fundingRecommendation": "המלצה מפורטת מאיפה לגייס - הון עצמי, הלוואה בערבות מדינה, משקיעים, גרנטים"
  },
  
  "marketingStrategy": {
    "positioning": "איך למקם את המותג בשוק",
    "targetMessage": "המסר השיווקי המרכזי",
    "tactics": [
      {"channel": "ערוץ", "description": "מה לעשות", "monthlyBudget": תקציב, "expectedROI": "תשואה צפויה"}
    ],
    "customerAcquisitionCost": "עלות גיוס לקוח משוערת",
    "lifetimeValue": "ערך חיים של לקוח (LTV)",
    "ltvToCacRatio": "יחס LTV:CAC ופירוש"
  },
  
  "operationalPlan": {
    "supplierStrategy": "אסטרטגיית ספקים והמלצות",
    "techStack": ["מערכת 1 + עלות חודשית", "מערכת 2 + עלות"],
    "qualityControl": "איך תבטיח איכות עקבית",
    "scalability": "איך העסק יוכל לצמוח בלי לקרוס"
  },
  
  "teamStructure": {
    "phase1": "צוות בחודשים 1-6",
    "phase2": "צוות בחודשים 7-12",
    "phase3": "צוות בשנה 2-3",
    "criticalHires": ["משרה קריטית 1 + למה חשובה"],
    "compensationStrategy": "איך לתגמל - שכר, בונוסים, אופציות"
  },
  
  "risks": [
    {"risk": "סיכון", "probability": "גבוה/בינוני/נמוך", "impact": "גבוה/בינוני/נמוך", "mitigation": "איך להתמודד"}
  ],
  
  "regulatoryRequirements": [
    {"requirement": "דרישה רגולטורית", "authority": "רשות מאשרת", "estimatedCost": עלות, "timeframe": "זמן הוצאה"}
  ],
  
  "actionPlan": {
    "month1": ["משימה 1", "משימה 2", "משימה 3"],
    "month2": ["משימה 1", "משימה 2"],
    "month3": ["משימה 1", "משימה 2"],
    "month6": ["משימה 1", "משימה 2"],
    "month12": ["משימה 1", "משימה 2"]
  },
  
  "kpis": [
    {"metric": "מדד KPI", "target": "יעד מספרי", "frequency": "תדירות מדידה"}
  ],
  
  "longTermVision": {
    "year1": "איפה תהיה אחרי שנה",
    "year3": "איפה תהיה אחרי 3 שנים",
    "year5": "איפה תהיה אחרי 5 שנים",
    "exitOptions": ["אפשרות יציאה 1", "אפשרות יציאה 2"]
  },
  
  "honestAssessment": {
    "viabilityScore": ציון 1-10 לכדאיות העסק,
    "strongestAspect": "הצד החזק ביותר של הרעיון",
    "weakestAspect": "הצד החלש ביותר שצריך לחזק",
    "criticalSuccessFactors": ["3 דברים קריטיים שחייבים לעבוד"],
    "redFlags": ["דגלים אדומים אם יש"],
    "recommendation": "המלצה כנה ומפורטת - להתקדם / לעצור / לשפר ואז להתקדם",
    "nextSteps": ["צעד מיידי 1", "צעד 2", "צעד 3"]
  }
}`;

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 16000,
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

  // ----- יצירת תכנון אדריכלי (נשאר זהה) -----
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

      const prompt = `אתה אדריכל ומתכנן פנים מומחה לחללים מסחריים בישראל. תכנן תוכנית חלוקה ומפרט טכני מלא. ענה בעברית בלבד.

מידע: סוג עסק: ${data.spaceType}, שטח: ${data.spaceSize} מ״ר, רוחב: ${width}, אורך: ${length}, אזורים: ${data.mustHaveAreas}, זרימה: ${fv('customerFlow', 'תכנן')}, תקציב: ${fv('budget', 'הערך')} ₪

החזר JSON בלבד:
{
  "layoutSummary": "הסבר 2-3 משפטים",
  "zones": [{"name": "", "x": 0, "y": 0, "width": 0, "height": 0, "color": "#XXXXXX", "description": "", "technicalSpec": {"electricity": {"outlets": "", "specialPower": "", "lighting": ""}, "plumbing": "", "furniture": [], "equipment": [], "flooring": "", "walls": "", "hvac": "", "specialNotes": ""}}],
  "flowPath": "",
  "bathroomsAndShowers": {"toiletsRequired": 0, "showersRequired": 0, "accessibleRequired": 0, "explanation": ""},
  "overallElectrical": {"totalOutlets": 0, "threePhaseNeeded": false, "mainBoardRecommendation": "", "totalConsumptionKW": 0},
  "keyRecommendations": [],
  "costBreakdown": {"electrical": 0, "plumbing": 0, "furniture": 0, "equipment": 0, "flooring": 0, "construction": 0, "hvac": 0, "total": 0},
  "estimatedRenovationCost": 0,
  "timeline": ""
}`;

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 16000,
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
      businessName: '', industry: '', description: '', location: '', whyThisIdea: '', uniqueValue: '',
      targetCustomer: '', customerProblem: '', competitors: '', marketSize: '', differentiation: '',
      revenueModel: '', productPrice: '', competitorPricing: '',
      initialInvestment: '', monthlyFixedCosts: '', fundingSource: '', runwayMonths: '', expectedMonthlyUnits: '',
      operationsMode: '', suppliers: '', location_type: '', technology: '',
      employees: '', rolesNeeded: '', marketingChannels: '', monthlyMarketingBudget: '',
      mainRisks: '', regulation: '', yearOneGoals: '', yearThreeVision: '', exitStrategy: '',
      spaceSize: '', spaceShape: 'rectangle', spaceWidth: '', spaceLength: '', spaceType: '',
      mustHaveAreas: '', customerFlow: '', budget: ''
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
              <span className="text-sm font-medium text-slate-700">יועץ עסקי דיגיטלי ליזמים בישראל</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              תוכנית עסקית מקצועית
              <br />
              <span className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ברמה של יועץ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-2">
              7 שלבים מקצועיים שמכסים את כל מה שצריך
            </p>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              ובסוף - תוכנית עסקית מלאה ברמה שמגישים למשקיעים
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">תוכנית עסקית מקיפה</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                7 שלבים מקצועיים: רעיון, שוק, מודל עסקי, מימון, תפעול, צוות, סיכונים. בסוף - תוכנית מלאה עם Business Model Canvas, ניתוח שוק, מודל פיננסי, אסטרטגיית שיווק ותכנית פעולה.
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
              <div className="text-3xl font-bold text-slate-900">~15 דק׳</div>
              <div className="text-sm text-slate-500">זמן מילוי מקיף</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">AI</div>
              <div className="text-sm text-slate-500">ברמה מקצועית</div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">מבוסס על המתודולוגיות המובילות בעולם:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-600">
              <div>📚 Lean Startup</div>
              <div>📊 Business Model Canvas</div>
              <div>🎯 Porter's 5 Forces</div>
              <div>🌊 Blue Ocean Strategy</div>
              <div>📈 Good to Great</div>
              <div>⚡ Blitzscaling</div>
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
          <h3 className="text-2xl font-bold text-slate-900 mb-3">בונה תוכנית מקצועית...</h3>
          <p className="text-slate-600 min-h-[1.5rem] transition-all">{loadingMessage}</p>
          <p className="text-xs text-slate-400 mt-4">הניתוח לוקח 30-60 שניות</p>
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
          <button
            onClick={reset}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </button>

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
              <div className="mb-6 p-4 bg-gradient-to-l from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl flex gap-3">
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
                    {field.help && (
                      <p className="text-xs text-slate-500 mb-2 leading-relaxed">💡 {field.help}</p>
                    )}
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
                    {mode === 'business' ? 'בנה לי תוכנית עסקית מקצועית' : 'תכנן לי את המקום'}
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

  // ========== RESULTS - BUSINESS PLAN (חדש ומקיף) ==========
  if (view === 'results' && mode === 'business' && result) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <div className="max-w-5xl mx-auto space-y-5">
          
          {/* Hero */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>תוכנית עסקית מקצועית</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{data.businessName}</h1>
            <p className="text-blue-100 leading-relaxed md:text-lg">{result.executiveSummary}</p>
            
            {result.honestAssessment && (
              <div className="mt-6 inline-flex items-center gap-3 bg-white/15 backdrop-blur px-5 py-3 rounded-2xl">
                <div className="text-3xl font-bold">{result.honestAssessment.viabilityScore}/10</div>
                <div className="text-sm">
                  <div className="font-semibold">ציון כדאיות</div>
                  <div className="text-blue-100">לפי ניתוח מקצועי</div>
                </div>
              </div>
            )}
          </div>

          {/* הערכות שעשיתי */}
          {result.assumptionsMade && result.assumptionsMade.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" />
                הנחות מקצועיות שעשיתי
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

          {/* מספרים מרכזיים */}
          {result.financials && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'הכנסה חודשית', value: `₪${formatNum(result.financials.monthlyRevenue)}`, color: 'text-slate-900' },
                { label: 'רווח חודשי', value: `₪${formatNum(result.financials.monthlyProfit)}`, color: result.financials.monthlyProfit >= 0 ? 'text-emerald-600' : 'text-red-600' },
                { label: 'נקודת איזון', value: `${formatNum(result.financials.breakEvenUnits)} יח׳`, color: 'text-slate-900' },
                { label: 'החזר השקעה', value: `${result.financials.breakEvenMonths} חודשים`, color: 'text-slate-900' }
              ].map((kpi, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="text-xs text-slate-500 mb-1">{kpi.label}</div>
                  <div className={`text-xl md:text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Business Model Canvas */}
          {result.businessModelCanvas && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📋 Business Model Canvas</h3>
              <p className="text-sm text-slate-500 mb-5">המודל העסקי המלא לפי Alex Osterwalder</p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { title: 'הצעת ערך', content: result.businessModelCanvas.valueProposition, color: 'bg-blue-50', text: 'text-blue-900' },
                  { title: 'פלחי לקוחות', content: result.businessModelCanvas.customerSegments, color: 'bg-purple-50', text: 'text-purple-900' },
                  { title: 'ערוצי הפצה', content: result.businessModelCanvas.channels, color: 'bg-pink-50', text: 'text-pink-900' },
                  { title: 'יחסי לקוחות', content: result.businessModelCanvas.customerRelationships, color: 'bg-rose-50', text: 'text-rose-900' },
                  { title: 'מקורות הכנסה', content: result.businessModelCanvas.revenueStreams, color: 'bg-emerald-50', text: 'text-emerald-900' },
                  { title: 'משאבי מפתח', content: result.businessModelCanvas.keyResources, color: 'bg-teal-50', text: 'text-teal-900' },
                  { title: 'פעילויות מפתח', content: result.businessModelCanvas.keyActivities, color: 'bg-cyan-50', text: 'text-cyan-900' },
                  { title: 'שותפים', content: result.businessModelCanvas.keyPartners, color: 'bg-indigo-50', text: 'text-indigo-900' },
                  { title: 'מבנה עלויות', content: result.businessModelCanvas.costStructure, color: 'bg-amber-50', text: 'text-amber-900' }
                ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-2xl p-4`}>
                    <h4 className={`font-bold ${item.text} mb-2 text-sm`}>{item.title}</h4>
                    <p className={`text-sm ${item.text} opacity-90 leading-relaxed`}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ניתוח שוק */}
          {result.marketAnalysis && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📊 ניתוח שוק</h3>
              <p className="text-sm text-slate-500 mb-5">גודל השוק והפוטנציאל לפי מתודולוגיית TAM-SAM-SOM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5">
                  <div className="text-xs text-blue-700 font-semibold mb-1">TAM - שוק כולל</div>
                  <div className="text-xl font-bold text-blue-900">{result.marketAnalysis.tam}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5">
                  <div className="text-xs text-purple-700 font-semibold mb-1">SAM - שוק זמין</div>
                  <div className="text-xl font-bold text-purple-900">{result.marketAnalysis.sam}</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5">
                  <div className="text-xs text-emerald-700 font-semibold mb-1">SOM - שוק ריאלי</div>
                  <div className="text-xl font-bold text-emerald-900">{result.marketAnalysis.som}</div>
                </div>
              </div>

              {result.marketAnalysis.marketTrends && (
                <div className="mb-5">
                  <h4 className="font-bold text-slate-900 mb-2">📈 מגמות שוק</h4>
                  <ul className="space-y-2">
                    {result.marketAnalysis.marketTrends.map((t, i) => (
                      <li key={i} className="text-sm text-slate-700 bg-slate-50 rounded-xl p-3">{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.marketAnalysis.competitorAnalysis && result.marketAnalysis.competitorAnalysis.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">🏢 ניתוח מתחרים</h4>
                  <div className="space-y-3">
                    {result.marketAnalysis.competitorAnalysis.map((c, i) => (
                      <div key={i} className="bg-slate-50 rounded-2xl p-4">
                        <h5 className="font-bold text-slate-900 mb-2">{c.name}</h5>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <div className="text-emerald-700 font-semibold mb-1">חוזקות</div>
                            <div className="text-slate-600">{c.strengths}</div>
                          </div>
                          <div>
                            <div className="text-red-700 font-semibold mb-1">חולשות</div>
                            <div className="text-slate-600">{c.weaknesses}</div>
                          </div>
                          <div>
                            <div className="text-blue-700 font-semibold mb-1">היתרון שלך</div>
                            <div className="text-slate-600">{c.yourAdvantage}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SWOT */}
          {result.swot && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">🎯 ניתוח SWOT</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: 'חוזקות (Strengths)', items: result.swot.strengths, bg: 'bg-emerald-50', text: 'text-emerald-900' },
                  { title: 'חולשות (Weaknesses)', items: result.swot.weaknesses, bg: 'bg-red-50', text: 'text-red-900' },
                  { title: 'הזדמנויות (Opportunities)', items: result.swot.opportunities, bg: 'bg-blue-50', text: 'text-blue-900' },
                  { title: 'איומים (Threats)', items: result.swot.threats, bg: 'bg-amber-50', text: 'text-amber-900' }
                ].map((q, i) => (
                  <div key={i} className={`${q.bg} rounded-2xl p-4`}>
                    <h4 className={`font-bold ${q.text} mb-2`}>{q.title}</h4>
                    <ul className={`space-y-1.5 text-sm ${q.text}`}>
                      {q.items.map((x, j) => <li key={j}>• {x}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* מודל פיננסי - תזרים */}
          {result.financials && result.financials.cashFlowYear1 && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">💰 תזרים מזומנים שנה ראשונה</h3>
              <p className="text-sm text-slate-500 mb-5">צפי הכנסות, הוצאות ויתרה לאורך השנה</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-right py-3 px-2 font-bold text-slate-700">חודש</th>
                      <th className="text-right py-3 px-2 font-bold text-emerald-700">הכנסות</th>
                      <th className="text-right py-3 px-2 font-bold text-red-700">הוצאות</th>
                      <th className="text-right py-3 px-2 font-bold text-slate-700">יתרה</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.financials.cashFlowYear1.map((m, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-3 px-2 font-semibold">חודש {m.month}</td>
                        <td className="py-3 px-2 text-emerald-700">₪{formatNum(m.revenue)}</td>
                        <td className="py-3 px-2 text-red-700">₪{formatNum(m.expenses)}</td>
                        <td className={`py-3 px-2 font-bold ${m.balance >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                          ₪{formatNum(m.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {result.financials.fundingNeeded > 0 && (
                <div className="mt-5 p-4 bg-blue-50 rounded-2xl">
                  <div className="text-sm font-semibold text-blue-900 mb-1">💵 מימון נדרש: ₪{formatNum(result.financials.fundingNeeded)}</div>
                  <div className="text-sm text-blue-800">{result.financials.fundingRecommendation}</div>
                </div>
              )}
            </div>
          )}

          {/* אסטרטגיית שיווק */}
          {result.marketingStrategy && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📣 אסטרטגיית שיווק</h3>
              
              <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                <div className="text-sm text-slate-700 mb-2"><span className="font-semibold">מיצוב:</span> {result.marketingStrategy.positioning}</div>
                <div className="text-sm text-slate-700"><span className="font-semibold">המסר המרכזי:</span> {result.marketingStrategy.targetMessage}</div>
              </div>

              {result.marketingStrategy.tactics && (
                <div className="space-y-3 mb-4">
                  <h4 className="font-bold text-slate-900">טקטיקות שיווקיות</h4>
                  {result.marketingStrategy.tactics.map((t, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-l from-blue-50 to-transparent rounded-2xl border-r-4 border-blue-500">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 mb-1">{t.channel}</div>
                        <p className="text-sm text-slate-700 mb-2">{t.description}</p>
                        <div className="flex gap-3 text-xs text-slate-600">
                          <span>💰 ₪{formatNum(t.monthlyBudget)} חודשי</span>
                          <span>📈 {t.expectedROI}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <div className="text-xs text-blue-700 mb-1">CAC</div>
                  <div className="text-sm font-bold text-blue-900">{result.marketingStrategy.customerAcquisitionCost}</div>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-4 text-center">
                  <div className="text-xs text-emerald-700 mb-1">LTV</div>
                  <div className="text-sm font-bold text-emerald-900">{result.marketingStrategy.lifetimeValue}</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4 text-center">
                  <div className="text-xs text-purple-700 mb-1">LTV:CAC</div>
                  <div className="text-sm font-bold text-purple-900">{result.marketingStrategy.ltvToCacRatio}</div>
                </div>
              </div>
            </div>
          )}

          {/* תכנית תפעול */}
          {result.operationalPlan && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">⚙️ תכנית תפעולית</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="font-semibold text-slate-900 mb-1">אסטרטגיית ספקים</div>
                  <p className="text-sm text-slate-700">{result.operationalPlan.supplierStrategy}</p>
                </div>
                {result.operationalPlan.techStack && (
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <div className="font-semibold text-slate-900 mb-2">מערכות טכנולוגיות</div>
                    <ul className="space-y-1">
                      {result.operationalPlan.techStack.map((t, i) => (
                        <li key={i} className="text-sm text-slate-700">• {t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="font-semibold text-slate-900 mb-1">בקרת איכות</div>
                  <p className="text-sm text-slate-700">{result.operationalPlan.qualityControl}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="font-semibold text-slate-900 mb-1">סקלאביליות</div>
                  <p className="text-sm text-slate-700">{result.operationalPlan.scalability}</p>
                </div>
              </div>
            </div>
          )}

          {/* מבנה צוות */}
          {result.teamStructure && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">👥 מבנה צוות לאורך זמן</h3>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="bg-blue-50 rounded-2xl p-4">
                  <div className="text-xs text-blue-700 font-bold mb-2">חודשים 1-6</div>
                  <p className="text-sm text-blue-900">{result.teamStructure.phase1}</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4">
                  <div className="text-xs text-purple-700 font-bold mb-2">חודשים 7-12</div>
                  <p className="text-sm text-purple-900">{result.teamStructure.phase2}</p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="text-xs text-emerald-700 font-bold mb-2">שנה 2-3</div>
                  <p className="text-sm text-emerald-900">{result.teamStructure.phase3}</p>
                </div>
              </div>
              {result.teamStructure.criticalHires && (
                <div className="bg-amber-50 rounded-2xl p-4 mb-3">
                  <div className="font-bold text-amber-900 mb-2">⭐ גיוסים קריטיים</div>
                  <ul className="space-y-1">
                    {result.teamStructure.criticalHires.map((h, i) => (
                      <li key={i} className="text-sm text-amber-900">• {h}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="font-semibold text-slate-900 mb-1">אסטרטגיית תגמול</div>
                <p className="text-sm text-slate-700">{result.teamStructure.compensationStrategy}</p>
              </div>
            </div>
          )}

          {/* סיכונים */}
          {result.risks && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">⚠️ ניתוח סיכונים והתמודדות</h3>
              <div className="space-y-3">
                {result.risks.map((r, i) => (
                  <div key={i} className="bg-amber-50 border-r-4 border-amber-500 rounded-2xl p-4">
                    <div className="font-bold text-amber-900 mb-2">{r.risk}</div>
                    <div className="flex gap-2 mb-2 text-xs">
                      <span className="bg-amber-200 text-amber-900 px-2 py-1 rounded">סבירות: {r.probability}</span>
                      <span className="bg-red-200 text-red-900 px-2 py-1 rounded">השפעה: {r.impact}</span>
                    </div>
                    <p className="text-sm text-amber-900"><span className="font-semibold">פעולת מנע:</span> {r.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* רגולציה */}
          {result.regulatoryRequirements && result.regulatoryRequirements.length > 0 && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">📜 דרישות רגולטוריות</h3>
              <div className="space-y-3">
                {result.regulatoryRequirements.map((r, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 mb-1">{r.requirement}</div>
                    <div className="text-sm text-slate-700">
                      <div>🏛️ רשות: {r.authority}</div>
                      <div>💵 עלות משוערת: ₪{formatNum(r.estimatedCost)}</div>
                      <div>⏱️ זמן הוצאה: {r.timeframe}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* תכנית פעולה */}
          {result.actionPlan && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">✅ תכנית פעולה מפורטת</h3>
              <div className="space-y-4">
                {[
                  { label: 'חודש 1 - הקמה', items: result.actionPlan.month1, color: 'bg-blue-50', text: 'text-blue-900' },
                  { label: 'חודש 2 - השקה', items: result.actionPlan.month2, color: 'bg-purple-50', text: 'text-purple-900' },
                  { label: 'חודש 3 - אופטימיזציה', items: result.actionPlan.month3, color: 'bg-pink-50', text: 'text-pink-900' },
                  { label: 'חודש 6 - צמיחה', items: result.actionPlan.month6, color: 'bg-emerald-50', text: 'text-emerald-900' },
                  { label: 'חודש 12 - התבססות', items: result.actionPlan.month12, color: 'bg-amber-50', text: 'text-amber-900' }
                ].filter(p => p.items).map((phase, i) => (
                  <div key={i} className={`${phase.color} rounded-2xl p-4`}>
                    <h4 className={`font-bold ${phase.text} mb-2`}>{phase.label}</h4>
                    <ul className={`space-y-1.5 text-sm ${phase.text}`}>
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KPIs */}
          {result.kpis && (
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">📊 מדדי הצלחה (KPIs)</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {result.kpis.map((kpi, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 mb-1">{kpi.metric}</div>
                    <div className="text-sm text-slate-700">🎯 יעד: {kpi.target}</div>
                    <div className="text-sm text-slate-700">⏱️ מדידה: {kpi.frequency}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* חזון לעתיד */}
          {result.longTermVision && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">🚀 חזון ארוך טווח</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4">
                  <div className="font-bold text-slate-900 mb-1">📅 שנה 1</div>
                  <p className="text-sm text-slate-700">{result.longTermVision.year1}</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="font-bold text-slate-900 mb-1">📅 שנה 3</div>
                  <p className="text-sm text-slate-700">{result.longTermVision.year3}</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="font-bold text-slate-900 mb-1">📅 שנה 5</div>
                  <p className="text-sm text-slate-700">{result.longTermVision.year5}</p>
                </div>
                {result.longTermVision.exitOptions && (
                  <div className="bg-white rounded-2xl p-4">
                    <div className="font-bold text-slate-900 mb-2">🚪 אפשרויות יציאה</div>
                    <ul className="space-y-1">
                      {result.longTermVision.exitOptions.map((opt, i) => (
                        <li key={i} className="text-sm text-slate-700">• {opt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* הערכה כנה - הקטע הכי חשוב */}
          {result.honestAssessment && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-2xl p-6 md:p-10">
              <div className="flex items-center gap-2 text-indigo-300 mb-4">
                <Compass className="w-5 h-5" />
                <span className="text-sm font-medium">הערכה כנה ומקצועית</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-900/40 rounded-2xl p-4">
                  <div className="text-xs text-emerald-300 font-semibold mb-1">💪 הצד החזק ביותר</div>
                  <p className="text-sm text-emerald-100">{result.honestAssessment.strongestAspect}</p>
                </div>
                <div className="bg-red-900/40 rounded-2xl p-4">
                  <div className="text-xs text-red-300 font-semibold mb-1">⚠️ הצד שצריך לחזק</div>
                  <p className="text-sm text-red-100">{result.honestAssessment.weakestAspect}</p>
                </div>
              </div>

              {result.honestAssessment.criticalSuccessFactors && (
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
                  <div className="font-bold text-white mb-2">🎯 גורמי הצלחה קריטיים</div>
                  <ul className="space-y-1">
                    {result.honestAssessment.criticalSuccessFactors.map((f, i) => (
                      <li key={i} className="text-sm text-slate-200">• {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.honestAssessment.redFlags && result.honestAssessment.redFlags.length > 0 && (
                <div className="bg-red-900/40 rounded-2xl p-4 mb-4">
                  <div className="font-bold text-red-200 mb-2">🚩 דגלים אדומים</div>
                  <ul className="space-y-1">
                    {result.honestAssessment.redFlags.map((f, i) => (
                      <li key={i} className="text-sm text-red-100">• {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 mb-4">
                <div className="text-indigo-300 text-sm font-semibold mb-2">💬 ההמלצה שלי אליך</div>
                <p className="text-base md:text-lg leading-relaxed text-slate-100">{result.honestAssessment.recommendation}</p>
              </div>

              {result.honestAssessment.nextSteps && (
                <div className="bg-emerald-900/40 rounded-2xl p-4">
                  <div className="font-bold text-emerald-200 mb-2">⚡ הצעדים הבאים שלך</div>
                  <ol className="space-y-2">
                    {result.honestAssessment.nextSteps.map((s, i) => (
                      <li key={i} className="text-sm text-emerald-100 flex gap-2">
                        <span className="font-bold">{i + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
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

  // ========== RESULTS - SPACE PLAN (זהה לקודם) ==========
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

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">תוכנית חלוקה</h3>
            <div className="bg-slate-50 rounded-2xl p-4 overflow-auto">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto" style={{ maxHeight: '600px' }}>
                <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#f8fafc" stroke="#1e293b" strokeWidth="3" />
                {result.zones.map((zone, i) => {
                  const x = zone.x * scaleX;
                  const y = zone.y * scaleY;
                  const w = zone.width * scaleX;
                  const h = zone.height * scaleY;
                  const fontSize = Math.min(w, h) / 7;
                  return (
                    <g key={i}>
                      <rect x={x} y={y} width={w} height={h} fill={zone.color || '#dbeafe'} stroke="#475569" strokeWidth="2" opacity="0.85" />
                      <text x={x + w/2} y={y + h/2 - fontSize/2} textAnchor="middle" fontSize={Math.min(fontSize, 22)} fontWeight="bold" fill="#1e293b">{zone.name}</text>
                      <text x={x + w/2} y={y + h/2 + fontSize/2 + 5} textAnchor="middle" fontSize={Math.min(fontSize * 0.7, 16)} fill="#475569">{(zone.width * zone.height).toFixed(1)} מ״ר</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">פירוט אזורים + מפרט טכני</h3>
            <div className="space-y-4">
              {result.zones.map((zone, i) => (
                <div key={i} className="p-5 rounded-2xl border-2 border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: zone.color }}>
                      <span className="text-xl font-bold text-slate-700">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{zone.name}</h4>
                      <p className="text-xs text-slate-500">{(zone.width * zone.height).toFixed(1)} מ״ר • {zone.width}×{zone.height} מ׳</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{zone.description}</p>
                  {zone.technicalSpec && (
                    <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                      {zone.technicalSpec.electricity && (
                        <div className="border-r-4 border-yellow-400 pr-3">
                          <h5 className="font-bold text-sm">⚡ חשמל ותאורה</h5>
                          {zone.technicalSpec.electricity.outlets && <p className="text-sm">שקעים: {zone.technicalSpec.electricity.outlets}</p>}
                          {zone.technicalSpec.electricity.lighting && <p className="text-sm">תאורה: {zone.technicalSpec.electricity.lighting}</p>}
                        </div>
                      )}
                      {zone.technicalSpec.furniture && zone.technicalSpec.furniture.length > 0 && (
                        <div className="border-r-4 border-amber-400 pr-3">
                          <h5 className="font-bold text-sm">🪑 ריהוט</h5>
                          <ul className="text-sm">{zone.technicalSpec.furniture.map((f, j) => <li key={j}>• {f}</li>)}</ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {result.estimatedRenovationCost && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-8">
              <div className="text-emerald-300 text-sm mb-2">הערכת עלות שיפוץ והקמה</div>
              <div className="text-4xl font-bold mb-4">₪{formatNum(result.estimatedRenovationCost)}</div>
              <p className="text-slate-300 text-sm">💡 הערכה ראשונית. מומלץ לקבל הצעות מ-3 קבלנים.</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-3">
            <button onClick={reset} className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 rounded-xl font-semibold">
              <RefreshCw className="w-4 h-4" />התחל מחדש
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
