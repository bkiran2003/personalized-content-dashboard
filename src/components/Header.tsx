import React from "react";
import useDebounce from "../hooks/useDebounce";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = { onSearch: (s: string) => void };

export default function Header({ onSearch }: Props) {
  const [search, setSearch] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const debounced = useDebounce(search, 400);

  React.useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg dark:border-gray-800">
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Content</span>Hub
        </span>
      </motion.div>
      
      <motion.div 
        className="relative flex-1 max-w-md mx-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${isFocused ? 'text-purple-500' : 'text-gray-400'}`}>
          <FaSearch />
        </div>
        <input
          type="search"
          className={`block w-full py-2.5 pl-10 pr-4 text-sm transition-all duration-300 rounded-lg bg-gray-100 dark:bg-gray-800 border ${isFocused ? 'border-purple-300 dark:border-purple-500 ring-2 ring-purple-200 dark:ring-purple-500/20' : 'border-transparent'} focus:outline-none`}
          placeholder="Search news, movies, posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </motion.div>
      
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl text-gray-400 transition-colors hover:text-purple-500" />
          <span className="hidden text-sm font-medium text-gray-700 md:inline dark:text-gray-300">Profile</span>
        </button>
      </motion.div>
    </header>
  );
}