import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, addFavorite } from './operations';

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
    changeStatusFilter: (state, action) => {
      state.getFilters = action.payload;
    },
    changeStatusTimer: (state, action) => {
      state.isTimerOn = action.payload;
    },
    addSearchExerciseParams: {
      reducer(state, action) {
        state.searchParams = action.payload;
      },
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

    builder.addCase(addFavorite.fulfilled, state => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addFavorite.pending, state => {
      // state.isLoading = true;
      state.error = null;
    });
  },
});
export const {
  changeStatusFilter,
  changeStatusTimer,
  addSearchExerciseParams,
  changePage,
} = advertsSlice.actions;

export default advertsSlice.reducer;
