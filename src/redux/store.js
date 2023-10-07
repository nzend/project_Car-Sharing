import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import advertsSlice from './adverts/slice';
import filterSlice from './filters/slice';

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
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};
const filtersPersistConfig = {
  key: 'brand',
  storage,
  whitelist: ['favorite'],
};

const persistedAdvertsReducer = persistReducer(
  advertsPersistConfig,
  advertsSlice
);
const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filterSlice
);

// Store
export const store = configureStore({
  reducer: {
    adverts: persistedAdvertsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
