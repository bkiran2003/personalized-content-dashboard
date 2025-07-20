import ContentCard from './ContentCard'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { motion } from 'framer-motion'
import { FaHeart, FaRegStar } from 'react-icons/fa'

const emptyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function FavoritesSection() {
  const favorites = useSelector((state: RootState) => state.favorites)
  
  return (
    <section id="favorites">
      {favorites.length === 0 ? (
        <motion.div 
          className="flex flex-col items-center justify-center py-12 text-center"
     
          initial="hidden"
          animate="visible"
        >
          <div className="p-6 mb-4 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
            <FaHeart className="text-4xl text-pink-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">No favorites yet</h3>
          <p className="max-w-md text-gray-500 dark:text-gray-400">
            Start by clicking the <FaRegStar className="inline text-yellow-400" /> icon on any content to add it here.
          </p>
        </motion.div>
      ) : (
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {favorites.map((fav, index) => (
            <motion.div
              key={fav.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <ContentCard item={fav} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  )
}