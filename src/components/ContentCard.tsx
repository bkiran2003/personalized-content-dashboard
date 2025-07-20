import { motion } from "framer-motion";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { ContentItem } from "../features/feed/feedSlice";

export default function ContentCard({ item }: { item: ContentItem }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFav = favorites.some(f => f.id === item.id);

  return (
    <motion.div
      className="flex flex-col mb-6 overflow-hidden transition shadow-card rounded-2xl bg-card dark:bg-cardDark sm:flex-row hover:shadow-lg"
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="object-cover w-full aspect-video sm:w-44 h-36"
      />
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold truncate">{item.title}</h3>
          <button
            className="ml-2"
            aria-label={isFav ? "Unfavorite" : "Favorite"}
            onClick={() => dispatch(toggleFavorite(item))}
          >
            {isFav
              ? <FaStar className="text-2xl text-accent" />
              : <FaRegStar className="text-2xl text-gray-400" />}
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{item.description}</p>
        <div className="flex items-center justify-between pt-3 mt-auto">
          <a href={item.link} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-white transition rounded-md bg-primary hover:bg-accent"
          >
            {item.type === "news"
              ? "Read More"
              : item.type === "recommendation"
              ? "Play Now"
              : "View Post"}
          </a>
          <span className="pl-3 text-xs text-gray-400">{item.source}</span>
        </div>
      </div>
    </motion.div>
  );
}
