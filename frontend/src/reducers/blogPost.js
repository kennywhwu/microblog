// Reducer for defining manipulations on Redux store based on dispatch action types

import {
  ADD_BLOGPOST,
  DELETE_BLOG,
  EDIT_BLOGPOST,
  LOAD_BLOGPOST
} from '../actionTypes';

const INITIAL_STATE = {};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Save list of blog summaries in Redux store
    case LOAD_BLOGPOST:
      return { ...action.blogPost };

    // Update blogPost store with added blog post
    case ADD_BLOGPOST:
      return { ...action.blogPost };

    // Update blogPost store with edited blog post
    case EDIT_BLOGPOST:
      return { ...action.blogPost };

    // Remove blog from store
    case DELETE_BLOG:
      let deleteBlogs = { ...state.blogs };
      delete deleteBlogs[action.id];
      return { ...state, blogs: deleteBlogs };

    // // Update identified blog in store with new payload
    // case EDIT_BLOG:
    //   let editBlogs = { ...state.blogs };
    //   editBlogs[action.payload.id] = action.payload;
    //   return { ...state, blogs: editBlogs };

    default:
      return state;
  }
}

export default rootReducer;
