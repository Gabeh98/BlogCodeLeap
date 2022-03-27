import { configureStore } from '@reduxjs/toolkit';
import Auth from '../actions/features/authSlice';
import UI from '../actions/features/uiSlice';
import Post from '../actions/features/postSlice';

export const store = configureStore({
  reducer: {
    auth: Auth,
    ui: UI,
    post: Post
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
