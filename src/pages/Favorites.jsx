import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
    const { items } = useSelector((state) => state.favorites);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">My Favorite Recipes</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-4">You haven't saved any recipes yet.</p>
                        <a href="/" className="text-orange-500 hover:underline">Go discover some meals!</a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {items.map((meal) => (
                            <RecipeCard key={meal.idMeal} meal={meal} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Favorites;
