// Reducer for defining manipulations on Redux store based on dispatch action types

import {
  DELETE_BLOG,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  LOAD_BLOGTITLES,
  ADD_BLOGPOST,
  EDIT_BLOGPOST
} from '../actionTypes';

const INITIAL_STATE = [];

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Save list of blog summaries in Redux store
    case LOAD_BLOGTITLES:
      return [...action.blogTitles];

    // Add blog to store with payload
    case ADD_BLOGPOST:
      return [
        ...state,
        {
          id: action.blogPost.id,
          title: action.blogPost.title,
          description: action.blogPost.description
        }
      ];

    // Update identified blog in store with new payload
    case EDIT_BLOGPOST:
      let editBlogs = state.map(e => {
        if (e.id === action.blogPost.id) {
          return {
            id: action.blogPost.id,
            title: action.blogPost.title,
            description: action.blogPost.description
          };
        } else {
          return e;
        }
      });
      return editBlogs;

    // Remove blog from store
    case DELETE_BLOG:
      let deleteBlogs = { ...state.blogs };
      delete deleteBlogs[action.id];
      return { ...state, blogs: deleteBlogs };

    // Add comment to specific blog post in store
    case ADD_COMMENT:
      return {
        ...state,
        blogs: {
          ...state.blogs,
          [action.payload.blog_id]: {
            ...state.blogs[action.payload.blog_id],
            comments: {
              ...state.blogs[action.payload.blog_id].comments,
              [action.payload.id]: action.payload.text
            }
          }
        }
      };

    // Remove comment from specific blog post in store
    case DELETE_COMMENT:
      let deleteComments = { ...state.blogs[action.payload.blog_id].comments };
      delete deleteComments[action.payload.id];
      return {
        ...state,
        blogs: {
          ...state.blogs,
          [action.payload.blog_id]: {
            ...state.blogs[action.payload.blog_id],
            comments: deleteComments
          }
        }
      };

    // Update identified comment from specific blog post in store
    // case EDIT_COMMENT:
    //   let editComments = { ...state.blogs[action.payload.blog_id].comments };
    //   editComments[action.payload.id] = action.payload.text;
    //   return { ...state, comments: editComments };

    default:
      return state;
  }
}

export default rootReducer;
