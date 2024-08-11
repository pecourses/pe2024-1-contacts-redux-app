import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const POSTS_SLICE_NAME = 'posts';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

// action creator
export const getPostsThunk = createAsyncThunk(
  `${POSTS_SLICE_NAME}/getPosts`,
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getPosts();
      return data; // data => payload in 'posts/getPosts/fulfilled'
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // err => payload in 'posts/getPosts/rejected'
    }
  }
);

const postsSlice = createSlice({
  initialState,
  name: POSTS_SLICE_NAME,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.posts = payload;
    });
    builder.addCase(getPostsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = postsSlice;

export default reducer;
