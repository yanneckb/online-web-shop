import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart.redux';
import userReducer from './user.redux';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// COMBINES USER AND CART REDUCER
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

// REDUX STORE
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
