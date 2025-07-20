import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCategories, toggleDarkMode } from "../features/preferences/preferencesSlice";

const categoriesList = [
  "Technology", "Sports", "Finance", "Health", "Entertainment"
];

export default function UserPreferences() {
  const dispatch = useDispatch();
  const { categories, darkMode } = useSelector(
    (state: RootState) => state.preferences
  );

  const updateCategory = (cat: string) => {
    let next = [...categories];
    if (categories.includes(cat)) next = next.filter(c => c !== cat);
    else next.push(cat);
    dispatch(setCategories(next));
  };

  return (
    <div>
      <h3 className="mb-2 font-bold">Categories</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {categoriesList.map(cat => (
          <button
            key={cat}
            onClick={() => updateCategory(cat)}
            className={`
              px-4 py-1 rounded-full border-2
              ${categories.includes(cat)
                ? "border-accent bg-accent/10 text-accent font-bold scale-105 shadow"
                : "border-gray-300 hover:border-primary text-gray-600"}
              transition
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <span className="text-sm font-semibold">Dark Mode</span>
        <input type="checkbox" checked={darkMode} onChange={() => dispatch(toggleDarkMode())} className="sr-only" />
        <span className={`
          w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 duration-300
        `}>
          <span
            className={`dot transition-all duration-300 w-4 h-4 ${darkMode ? "translate-x-5 bg-primary" : "bg-white"} rounded-full shadow`}
          ></span>
        </span>
      </label>
    </div>
  );
}

