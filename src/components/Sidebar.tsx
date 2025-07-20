import { FaThLarge, FaStar, FaFire } from 'react-icons/fa';
import UserPreferences from './UserPreferences';

const navLinks = [
  { label: "Feed", icon: <FaThLarge />, anchor: "#feed" },
  { label: "Trending", icon: <FaFire />, anchor: "#trending" },
  { label: "Favorites", icon: <FaStar />, anchor: "#favorites" }
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-16 h-screen text-gray-900 shadow-lg md:w-56 bg-gradient-to-b from-primary to-surface dark:from-gray-800 dark:to-gray-950 dark:text-white">
      <nav className="flex flex-col items-center flex-1 py-6 space-y-2 md:items-start">
        {navLinks.map(nav => (
          <a
            key={nav.label}
            href={nav.anchor}
            className="flex items-center justify-center w-full gap-3 py-2 text-lg font-medium transition rounded-lg md:justify-start md:px-6 hover:bg-primary/20 dark:hover:bg-gray-800"
          >
            {nav.icon}
            <span className="hidden md:inline">{nav.label}</span>
          </a>
        ))}
      </nav>
      <div className="p-3 mt-auto">
        <UserPreferences />
      </div>
    </aside>
  );
}
