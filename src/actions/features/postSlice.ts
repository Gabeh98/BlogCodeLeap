import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { PostI } from './types';

const initialState: PostI = {
    id:undefined,
    content:'',
    title:'',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    savePost: (state, action: PayloadAction<PostI>) => {
        state.id = action.payload.id;
        state.content = action.payload.content;
        state.title = action.payload.title;
      }
  }
});

export const selectPost = createSelector(
  (state: any) => ({ post: state.post }),
  state => state
);
export const uiState = (state: any) => state.post.post;
export const { savePost } = postSlice.actions;
export default postSlice.reducer;
