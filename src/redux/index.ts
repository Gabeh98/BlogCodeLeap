import { configureStore } from '@reduxjs/toolkit';
import Auth from '../actions/features/authSlice';
import UI from '../actions/features/uiSlice';
export const store = configureStore({
  reducer: {
    auth: Auth,
    ui:UI,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
