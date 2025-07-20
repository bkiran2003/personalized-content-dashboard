# 🚀 Personalized Content Dashboard

A modern, responsive dashboard built with **React (Next.js)**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. Track and interact with personalized news, trending movies, and social feeds—complete with live API data, drag-and-drop, dark mode, favorites, and beautiful animations.

## ✨ Features

- 🗞️ **Personalized Feed:** Curated news, movie recommendations, and mock social posts by your selected categories
- ⚡ **Modern UI & Animations:** Card hover lifts, drag-and-drop, soft shadows, and smooth transitions
- 🎨 **Dark/Light Mode:** Toggle theme instantly, with persistence
- ⭐ **Favorites & Trending:** Save your favorites and see what's hot
- 🔍 **Search & Debounced Filter:** Instantly filter your feed as you type
- 📱 **Mobile Responsive:** Optimized for any screen
- 🧰 **Redux State Management:** App-wide data flow, async thunks, and persistence
- 🔗 **API Integration:** NewsAPI & TMDB for live content
- 🛠️ **Testing Ready:** Sample unit tests with Jest and Testing Library

---

## 🛠️ Dependencies

| Package                 | Purpose                           |
|-------------------------|-----------------------------------|
| next                    | Core React framework              |
| react                   | UI library                        |
| react-dom               | React browser support             |
| typescript              | Static typing                     |
| tailwindcss             | CSS design utility                |
| postcss, autoprefixer   | For Tailwind/PostCSS build        |
| @reduxjs/toolkit        | Redux state management            |
| react-redux             | React bindings for Redux          |
| framer-motion           | Animations                        |
| @hello-pangea/dnd       | Drag-and-drop                     |
| react-icons             | Icon pack (FontAwesome etc)       |
| axios                   | API requests                      |
| lodash.debounce         | Debounced search                  |
| @testing-library/react* | Unit testing                      |
| jest*                   | JavaScript unit testing           |
| @types/*                | TypeScript type definitions       |

*(Dev dependencies `@testing-library/react`, `jest`, and `@types/*` are for type-checking and testing.)*

---

## 🏗️ Project Structure
personalized-content-dashboard/
├── src/
│ ├── components/ # Reusable UI components (Header, Sidebar, Card, etc.)
│ ├── features/ # Redux slices (preferences, feed, favorites)
│ ├── hooks/ # Custom React hooks (e.g., useDebounce)
│ ├── pages/ # Next.js pages (_app.tsx, index.tsx)
│ ├── redux/ # Redux store setup
│ ├── services/ # API call helpers (news, TMDB, mock data)
│ ├── styles/ # TailwindCSS and global CSS files
│ ├── tests/ # Unit tests using Jest and React Testing Library
├── public/ # Static assets (images, favicons, etc.)
├── .env.local # Environment variables (keep secret, don't commit)
├── tailwind.config.js # TailwindCSS configuration
├── postcss.config.js # PostCSS configuration
├── package.json # Project metadata, dependencies, and scripts
├── README.md # Project documentation

# 1. Clone this repository
git clone https://github.com/bkiran2003/personalized-content-dashboard.git
cd personalized-content-dashboard

# 2. Install all dependencies
npm install

# 3. Set up API keys (required for live data)
#   - Get a free NewsAPI key: https://newsapi.org/
#   - Get a free TMDB (movie database) key: https://developers.themoviedb.org/3
#   - Create a .env.local file in this folder with:
echo "NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWSAPI_KEY" > .env.local
echo "NEXT_PUBLIC_TMDB_API_KEY=YOUR_TMDB_API_KEY" >> .env.local
#   - Replace YOUR_NEWSAPI_KEY and YOUR_TMDB_API_KEY with your actual keys

# 4. Start the development server
npm run dev
#    - Open http://localhost:3000 in your browser to view the app

# 5. (Optional) Run unit tests
npm run test


---

## 🧑‍💻 User Flow

1. **Choose your content interests** in the sidebar (categories, dark mode toggle)
2. **Explore your Personalized Feed** (news, recommendations, and social posts)
3. **Drag-and-drop** to organize your cards
4. **Favorite** anything for quick access in the Favorites section ⭐
5. **Instant Search** across all feed items
6. **Toggle Dark/Light mode** for comfort
7. **Check Trending Section** to see what's popular

---

## 🚀 How to Push Updates to GitHub

**Only do these steps if you haven’t set up the remote before; otherwise, just `add`, `commit`, `push`.**

#### First time only:

---

## 🌍 Live Deployment

- Deploy in seconds to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
- Both platforms autodetect Next.js apps.  
- Connect your repo, hit deploy, and enjoy your live dashboard!

---

## 📎 Key Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [NewsAPI](https://newsapi.org/)
- [TMDB](https://developers.themoviedb.org/3)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📸 Screenshots

![Screenshot 2025-07-20 222515](images/Screenshot%202025-07-20%20222515.png)
![Screenshot 2025-07-20 222450](images/Screenshot%202025-07-20%20222450.png)
![Screenshot


