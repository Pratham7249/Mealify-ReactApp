import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.items.find(item => item.idMeal === action.payload.idMeal);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.idMeal !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
