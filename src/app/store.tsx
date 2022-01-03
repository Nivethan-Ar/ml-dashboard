import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    userAuth: userReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
