import { Link } from 'react-router-dom';

const RecipeCard = ({ meal }) => {
    return (
        <Link to={`/recipe/${meal.idMeal}`} className="group relative block h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-500 -z-10 transform translate-y-4 translate-x-4"></div>

            <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700/50 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium text-sm">View Recipe &rarr;</span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 dark:bg-orange-900/20 rounded-md">
                            {meal.strCategory}
                        </span>
                        {meal.strArea && (
                            <span className="text-slate-400 text-xs font-medium">
                                {meal.strArea}
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {meal.strMeal}
                    </h3>
                </div>
            </div>
        </Link>
    );
};
export default RecipeCard;
