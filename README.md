# Startup Studio 🚀

כלי חינמי ליזמים בישראל - תוכנית עסקית ותכנון אדריכלי עם AI.

## הוראות העלאה ל-Vercel

### שלב 1: העלאה ל-GitHub
1. היכנס ל-GitHub.com
2. לחץ **New repository**
3. שם: `startup-studio`
4. לחץ **Create repository**
5. העלה את כל הקבצים מתיקיית הפרויקט (דרך כפתור "uploading an existing file")

### שלב 2: קבלת מפתח API של Claude
1. היכנס ל-https://console.anthropic.com/
2. לך ל-API Keys ויצור מפתח חדש
3. שמור את המפתח (מתחיל ב-`sk-ant-`)

### שלב 3: העלאה ל-Vercel
1. היכנס ל-https://vercel.com/ עם חשבון GitHub
2. לחץ **Add New Project**
3. בחר את הריפוזיטורי `startup-studio`
4. תחת **Environment Variables** הוסף:
   - Name: `ANTHROPIC_API_KEY`
   - Value: המפתח שקיבלת מ-Anthropic
5. לחץ **Deploy**

### שלב 4: שיתוף הקישור
לאחר הבנייה, תקבל קישור כמו `startup-studio.vercel.app` - זהו!

## פיתוח מקומי
```bash
npm install
npm run dev
```
