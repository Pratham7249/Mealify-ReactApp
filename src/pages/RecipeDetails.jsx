import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/favoritesSlice';
import Loader from '../components/Loader';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    const isFavorite = favorites.some((item) => item.idMeal === id);

    useEffect(() => {
        const fetchMeal = async () => {
            setLoading(true);
            const data = await getMealById(id);
            setMeal(data);
            setLoading(false);
        };
        fetchMeal();
    }, [id]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(meal.idMeal));
        } else {
            dispatch(addToFavorites(meal));
        }
    };

    if (loading) return <Loader />;
    if (!meal) return <div className="text-center py-20 text-slate-500">Meal not found.</div>;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="inline-flex items-center text-orange-500 hover:underline mb-6">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Search
                </Link>

                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-96 object-cover" />
                        </div>
                        <div className="md:w-1/2 p-8 relative">
                            <div className="absolute top-6 right-6">
                                <button
                                    onClick={handleFavoriteClick}
                                    className={`p-3 rounded-full shadow-lg transition-transform hover:scale-110 ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400 dark:bg-slate-700'
                                        }`}
                                >
                                    <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                                </button>
                            </div>

                            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{meal.strMeal}</h1>
                            <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">{meal.strCategory}</span>
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">{meal.strArea}</span>
                            </div>

                            <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Ingredients</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                                {Array.from({ length: 20 }).map((_, i) => {
                                    const ingredient = meal[`strIngredient${i + 1}`];
                                    const measure = meal[`strMeasure${i + 1}`];
                                    return ingredient ? (
                                        <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                            {measure} {ingredient}
                                        </li>
                                    ) : null;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="p-8 border-t border-slate-100 dark:border-slate-700">
                        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Instructions</h2>
                        <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecipeDetails;
