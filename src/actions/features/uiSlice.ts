import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { LayoutI } from './types';

const initialState: LayoutI = {
  id: undefined,
  deleteModal: false,
  editModal: false,
  refresh: true
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDelete: (state, action: PayloadAction<LayoutI>) => {
      state.deleteModal = !state.deleteModal;
      state.id = action.payload.id;
    },
    openEdit: state => {
      state.editModal = !state.editModal;
    },
    closeAll: state => {
      state.deleteModal = false;
      state.editModal = false;
    },
    refresh: state => {
      state.refresh = !state.refresh;
    }
  }
});

export const selectUI = createSelector(
  (state: any) => ({ ui: state.ui }),
  state => state
);
export const uiState = (state: any) => state.ui.ui;
export const { openDelete, openEdit, closeAll, refresh } = uiSlice.actions;
export default uiSlice.reducer;
