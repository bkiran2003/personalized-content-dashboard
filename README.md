Personalized Content Dashboard
A modern, dynamic, fully responsive dashboard built with React (Next.js), Tailwind CSS, TypeScript, and Redux Toolkit.
Easily track and interact with personalized news, movie recommendations, and mock social content—all styled with beautiful animations, dark mode, and interactive features.

![Dashboard Screenshot](public/dashboard-screenshot with your screenshot if you add one -->

🚀 Features
Personalized Feed: Latest news, trending movies, and custom social posts, filtered by your favorite categories.

User Preferences: Instantly adjust your dashboard’s content, category interests, and appearance (dark mode).

Modern Responsive UI: Clean, attractive, and fast—mobile- and desktop-friendly.

Favorites & Trending: Mark favorite content and view trending items in one glance.

Smooth Animations: Drag-and-drop content organization, well-placed transitions, and card hover effects.

State-of-the-Art Architecture: Redux Toolkit, async thunks, and localStorage persistence.

Robust Testing: Provided unit test samples, ready for further coverage.

Dark/Light Themes: Effortless theme switching with Tailwind CSS.

Best Practices: Modular, commented, and extensible code.

🖥️ Tech Stack
Next.js

React

TypeScript

Tailwind CSS

Redux Toolkit

Framer Motion (animations)

React Icons (iconography)

Jest + Testing Library (unit test example)

NewsAPI and TMDB (live content APIs)

📸 Screenshots
Drag-and-drop a screenshot to /public/dashboard-screenshot.png and reference above.

🏁 Getting Started
1. Install Dependencies
Make sure you have Node.js ≥16.
Clone this repo and run:

bash
npm install
2. Set Up API Keys
Register free at NewsAPI and TMDB to get keys.

Create .env.local in the project root:

text
NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWSAPI_KEY
NEXT_PUBLIC_TMDB_API_KEY=YOUR_TMDB_API_KEY
3. Run in Development
bash
npm run dev
Go to http://localhost:3000.

4. Run Tests (Optional)
bash
npm run test
🏗️ Project Structure
text
personalized-content-dashboard/
├── src/
│   ├── components/        # All UI components
│   ├── features/          # Redux slices (preferences, feed, favorites)
│   ├── hooks/             # Custom hooks (e.g., useDebounce)
│   ├── pages/             # Next.js pages (_app, index)
│   ├── redux/             # Store configuration
│   ├── services/          # API call helpers
│   ├── styles/            # Tailwind globals
│   ├── tests/             # Unit tests
├── public/                # Static files, images
├── .env.local             # API keys (NOT committed)
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── etc.
✨ Assignment & Feature Highlights
Content Type: News, movies (TMDB), and mock trending/social cards

Personalization: Select favorite categories for a tailored feed

Persistence: Preferences & favorites stored in localStorage

Drag & Drop: Organize your feed by dragging cards

Accessibility: Color contrast, ARIA labels, keyboard navigation

Testing: Pre-configured with Jest, easily extensible

Animations: Framer Motion on cards and transitions

Dark Mode: Toggle, auto-persistence

API Security: API keys stored in .env.local only

📝 Deployment
You can deploy this project to Vercel (recommended for Next.js) or Netlify in minutes—both services autodetect Next.js apps.

📄 License
This project is provided for educational & demo use.
API keys are required for live data.