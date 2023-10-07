import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: null,
  minMileage: null,
  maxMileage: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, { payload }) => {
      console.log('PAY', payload);
      state.brand = payload.filter.brand;
      state.price = Number(payload.filter.price);
      state.minMileage = Number(payload.filter.minMileage);
      state.maxMileage = Number(payload.filter.maxMileage);
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;

export default filterSlice.reducer;
