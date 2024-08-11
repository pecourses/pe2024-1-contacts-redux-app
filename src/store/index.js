import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    postsList: postsReducer,
  },
});

export default store;

// {
//   contactsList: {
//     contacts: []
//   },
//   postsList: ({
//     posts: [],
//     isFetching: false,
//     error: null,
//   }),
// },
