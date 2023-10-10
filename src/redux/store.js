import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import advertsSlice from './adverts/slice';
import filterSlice from './filters/slice';
import favoritesSlice from './favorites/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const advertsPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedFavoritesReducer = persistReducer(
  advertsPersistConfig,
  favoritesSlice
);

export const store = configureStore({
  reducer: {
    adverts: advertsSlice,
    filters: filterSlice,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
