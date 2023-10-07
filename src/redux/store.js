import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import  advertsSlice  from './adverts/slice';

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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['favorite'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, advertsSlice);

// Store
export const store = configureStore({
  reducer: {
    advarts: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
