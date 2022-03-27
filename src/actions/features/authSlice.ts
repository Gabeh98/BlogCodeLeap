import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AuthI } from './types';

const initialState: AuthI = {
  name: '',
  logged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSwitch: (state, action: PayloadAction<AuthI>) => {
      state.name = action.payload.name;
      state.logged = action.payload.logged;
    }
  }
});

export const selectAuth = createSelector(
  (state: any) => ({ auth: state.auth }),
  state => state
);
export const loggedAuth = (state: any) => state.auth.auth;
export const { authSwitch } = authSlice.actions;
export default authSlice.reducer;
