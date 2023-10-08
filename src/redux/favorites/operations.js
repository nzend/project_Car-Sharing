import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/favorites`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const state = getState();
      console.log('state:', state);
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
      const { data } = await axios.post('/favorites', favoriteAdvert);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
