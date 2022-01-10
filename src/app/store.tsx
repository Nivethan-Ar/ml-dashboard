import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import sidebarReducer from '../features/sidebarSlice';

export const store = configureStore({
  reducer: {
    userAuth: userReducer,
    sidebar: sidebarReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
