import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { LayoutI } from './types';

const initialState: LayoutI = {
  deleteModal: false,
  editModal: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDelete: (state) => {
        state.deleteModal = !state.deleteModal
    },
    openEdit:(state, action: PayloadAction<LayoutI>) => {
        state.editModal = !state.deleteModal
    },
  }
});

export const selectUI = createSelector(
  (state: any) => ({ ui: state.ui }),
  state => state
);
export const uiState = (state: any) => state.ui.ui;
export const { openDelete , openEdit} = uiSlice.actions;
export default uiSlice.reducer;
