import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, getFavorites } from './operations';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    error: null,
    isLoading: false,
  },

  reducers: {
    addFavoritesId: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavoritesId: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item !== action.payload
      );
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(getFavorites.fulfilled, (state, action) => {
  //     state.favorites = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   });
  //   builder.addCase(getFavorites.rejected, (state, action) => {
  //     state.error = action.payload;
  //     state.isLoading = false;
  //   });
  //   builder.addCase(getFavorites.pending, state => {
  //     state.isLoading = true;
  //     state.error = null;
  //   });
  //   builder.addCase(addFavorite.fulfilled, (state, action) => {
  //     state.favorites.push(action.payload);
  //     state.isLoading = false;
  //     state.error = null;
  //   });
  //   builder.addCase(addFavorite.rejected, (state, action) => {
  //     state.error = action.payload;
  //     state.isLoading = false;
  //   });
  //   builder.addCase(addFavorite.pending, state => {
  //     state.isLoading = true;
  //     state.error = null;
  //   });
  // },
});
export const { addFavoritesId, removeFavoritesId } = favoritesSlice.actions;

export default favoritesSlice.reducer;
