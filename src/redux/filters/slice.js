import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    brand: '',
    price: null,
    minMileage: null,
    maxMileage: null,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: ({filters}, { payload }) => {
   
      filters.brand = payload.filter.brand;
      filters.price = Number(payload.filter.price);
      filters.minMileage = Number(payload.filter.minMileage);
      filters.maxMileage = Number(payload.filter.maxMileage);
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;

export default filterSlice.reducer;
