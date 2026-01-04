# 🐾 Vet Exam Prep

A modern, mobile-optimized veterinary exam preparation platform built with React, Firebase, and Gemini AI.

[Live Demo](https://vet-exam-app.vercel.app/)

---

## 🌟 Áttekintés

A **Vet Exam Prep** egy professzionális állatorvosi vizsgafelkészítő rendszer, amely segít az összetett tananyagok elsajátításában és a tudás tesztelésében. Az alkalmazás különlegessége a **Gemini AI integráció**, amely azonnali szakmai magyarázatot ad a nehezebb kérdéseknél.

## ✨ Főbb funkciók

- **📖 Digitális Tananyag**: 10 kidolgozott szakmai tétel (Clostridiumok, E. coli, AMR mechanizmusok, stb.) tiszta, jól olvasható formátumban.
- **🧠 Intelligens Gyakorlás**: 500+ kérdésből álló adatbázis azonnali visszajelzéssel és AI alapú magyarázatkérési lehetőséggel.
- **📝 Vizsga Szimuláció**: Éles helyzetet modellező, 40 kérdéses tesztek pontozással és kiértékeléssel.
- **📊 Profi Statisztika**: Aktivitási hőtérkép, hiba-eloszlási diagramok és vizsga trendek a fejlődés nyomon követéséhez.
- **🔥 Motivációs Rendszer**: Napi sorozat (streak) számláló a folyamatos tanulás ösztönzésére.
- **📱 Mobile-First Design**: Teljesen reszponzív, app-szerű élmény minden eszközön.

## 🛠 Technológiai Stack

- **Frontend**: React 18, Vite
- **UI & Styling**: Tailwind CSS, Shadcn/UI, Lucide Icons
- **Backend & Database**: Firebase (Auth & Firestore)
- **AI Integration**: Google Generative AI (Gemini Pro)
- **Charts**: Recharts
- **Internationalization**: react-i18next
- **Deployment**: Vercel

## 📂 Projektszerkezet

```text
src/
├── components/       # Shadcn és egyedi UI komponensek
├── contexts/         # Globális Auth és Stats állapotkezelés
├── data/             # Tananyag és 500+ kérdés (Pure JS)
├── hooks/            # Egyedi React hookok a vizsga/gyakorló logikához
├── pages/            # Fő nézetek (Stats, Exam, Practice, Study, stb.)
├── services/         # Firebase és Gemini AI konfigurációk
└── i18n/             # Többnyelvűségi támogatás
```

## 🚀 Telepítés és Futtatás

1. Klónozd a repository-t:
   ```bash
   git clone https://github.com/your-username/vet-exam-app.git
   ```
2. Telepítsd a függőségeket:
   ```bash
   npm install
   ```
3. Hozz létre egy `.env` fájlt a Firebase és Gemini API kulcsokkal.
4. Indítsd el a fejlesztői szervert:
   ```bash
   npm run dev
   ```

## 📈 Tervezett fejlesztések

- [ ] További tételek kidolgozása (6-15. tételek)
- [ ] Képfelismerő funkció (pl. mikroszkópos képek felismerése AI-val)
- [ ] PDF exportálási lehetőség a tételekből
- [ ] Közösségi funkciók (tanulócsoportok, rangsor)

---

Developed with ❤️ for Veterinary Students.
