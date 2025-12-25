import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const searchMeals = async (query) => {
    try {
        const response = await api.get(`/search.php?s=${query}`);
        return response.data.meals;
    } catch (error) {
        console.error("Error searching meals:", error);
        return null;
    }
};

export const getMealById = async (id) => {
    try {
        const response = await api.get(`/lookup.php?i=${id}`);
        return response.data.meals ? response.data.meals[0] : null;
    } catch (error) {
        console.error("Error fetching meal details:", error);
        return null;
    }
};


export const getRecommendedMeals = async () => {
    try {
        const response = await api.get('/filter.php?c=Seafood');
        // Return only the first 8 meals to keep it clean
        return response.data.meals ? response.data.meals.slice(0, 8) : [];
    } catch (error) {
        console.error("Error fetching recommended meals:", error);
        return [];
    }
};

export default api;
