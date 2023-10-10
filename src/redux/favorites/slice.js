import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },

  reducers: {
    addFavoritesId: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavoritesId: (state, action) => {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },
  },
});
export const { addFavoritesId, removeFavoritesId } = favoritesSlice.actions;

export default favoritesSlice.reducer;
