import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// action creator
export const getPostsThunk = createAsyncThunk(
  'posts/getPosts',
  async (payload, thunkAPI) => {
    try {
      const { data } = await httpClient.get('/posts');
      return data; // data => payload in 'posts/getPosts/fulfilled'
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // err => payload in 'posts/getPosts/rejected'
    }
  }
);
console.dir(getPostsThunk);
// pending: isFetching = true, error = null,
// fulfilled: isFetching = false, posts = data
// rejected: isFetching = false, error = err
const postsSlice = createSlice({
  initialState,
  name: 'posts',
  // (state,action)=>{}
  reducers: {},
  extraReducers: builder => {
    // 'posts/getPosts/pending'
    builder.addCase(getPostsThunk.pending, (state, { payload }) => {
      state.isFetching = true;
      state.error = null;
    });
    // 'posts/getPosts/fulfilled'
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.posts = payload;
    });
    // 'posts/getPosts/rejected'
    builder.addCase(getPostsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = postsSlice;

export default reducer;
