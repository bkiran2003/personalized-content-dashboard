import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect, useState } from 'react'
import { fetchFeed } from '../features/feed/feedSlice'
import { loadPreferences } from '../features/preferences/preferencesSlice'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FeedSection from '../components/FeedSection'
import FavoritesSection from '../components/FavoritesSection'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const dispatch = useDispatch()
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(loadPreferences())
  }, [dispatch])

  useEffect(() => {
    if (categories.length > 0) dispatch(fetchFeed(categories) as any)
  }, [categories, dispatch])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Sidebar />
      
      <div className="relative flex flex-col flex-1 overflow-x-hidden">
        <Header onSearch={setSearch} />
        
        <motion.main 
          className="flex flex-col flex-1 w-full gap-12 px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <section>
            <div className="max-w-3xl mb-10">
              <motion.h1 
                className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Personalized</span> Feed
              </motion.h1>
              <motion.div 
                className="w-32 h-2 mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Discover content tailored just for you based on your preferences.
              </motion.p>
            </div>
            
            <FeedSection search={search} />
          </section>
          
          <section className="mb-16">
            <motion.div 
              className="p-6 border shadow-xl rounded-2xl bg-gradient-to-br from-white/80 to-white/20 dark:from-gray-800/80 dark:to-gray-900/20 backdrop-blur-lg border-white/20 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Your Favorites
              </h2>
              <FavoritesSection />
            </motion.div>
          </section>
        </motion.main>
        
        <footer className="py-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with <span className="text-pink-500">❤</span> by your team • {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  )
}