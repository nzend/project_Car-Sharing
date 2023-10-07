import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://651fd793906e276284c399ff.mockapi.io/api';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState, extra }) => {
          const state = getState();
          console.log("state:", state);
      if (state.adverts.items.length > 1) {
        return false;
      }
    },
  }
);

export const addFavorite = createAsyncThunk(
  'addFavorite',
  async (favoriteAdvert, thunkAPI) => {
    try {
      const { data } = await axios.post(
        '/favorite',
        favoriteAdvert
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


