import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMeals, getRecommendedMeals } from '../utils/api';
import { setQuery, setResults, setLoading } from '../store/searchSlice';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import { Search } from 'lucide-react';

const Home = () => {
    const dispatch = useDispatch();
    const { query, results, loading } = useSelector((state) => state.search);
    const [searchTerm, setSearchTerm] = useState(query || '');
    const [recommendations, setRecommendations] = useState([]);
    const [loadingRecs, setLoadingRecs] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const data = await getRecommendedMeals();
            setRecommendations(data);
            setLoadingRecs(false);
        };
        fetchRecommendations();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            dispatch(setQuery(searchTerm));
            if (searchTerm.trim()) {
                dispatch(setLoading(true));
                const data = await searchMeals(searchTerm);
                dispatch(setResults(data || []));
                dispatch(setLoading(false));
            } else {
                if (searchTerm === '') dispatch(setResults([]));
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, dispatch]);

    const showRecommendations = !searchTerm && !loading;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 py-24 px-4 text-center">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-orange-500/30 to-red-500/30 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-30 -z-0 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6 animate-fade-in-up">
                        Over 50,000+ Recipes
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                        Cook Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Pro</span> Today.
                    </h1>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                        <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-full shadow-2xl overflow-hidden">
                            <Search className="ml-6 text-slate-400 h-6 w-6" />
                            <input
                                type="text"
                                placeholder="What are you craving? (e.g. Sushi, Burger)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-5 px-4 text-lg bg-transparent focus:outline-none dark:text-white placeholder:text-slate-400"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 -mt-10 relative z-20">
                {searchTerm ? (
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-700 shadow-xl">
                        <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                            Search Results
                        </h2>
                        {loading ? (
                            <Loader />
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {results && results.length > 0 ? (
                                    results.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
                                ) : (
                                    <div className="col-span-full text-center py-20">
                                        <p className="text-xl text-slate-500 dark:text-slate-400">No meals found. Try different keywords.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-700 shadow-xl">
                        <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                            Recommended for You
                        </h2>
                        {loadingRecs ? (
                            <Loader />
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {recommendations.map((meal) => (
                                    <RecipeCard key={meal.idMeal} meal={meal} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Home;
