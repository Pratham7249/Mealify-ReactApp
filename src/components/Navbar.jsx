import { Link } from 'react-router-dom';
import { Heart, Moon, Sun, Search, Utensils } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDarkMode(true);
        }
    };

    return (
        <nav className="sticky top-0 z-50 glass-panel border-b-0 mb-[-1px]">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-gradient-to-tr from-orange-500 to-red-500 rounded-lg text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Utensils className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300">
                        Mealify
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link to="/" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
                        <Search className="h-5 w-5" />
                    </Link>
                    <Link to="/favorites" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
                        <Heart className="h-5 w-5" />
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
