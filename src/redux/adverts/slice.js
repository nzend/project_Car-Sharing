import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],

    page: 1,
    error: null,
    isLoading: false,
  },

  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAdverts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(getAdverts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAdverts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
  },
});
export const { changePage, addFavoritesId } = advertsSlice.actions;

export default advertsSlice.reducer;
