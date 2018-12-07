// Reducer for defining manipulations on blogTitles in Redux store based on dispatch action types

import {
  LOAD_BLOGTITLES,
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  DELETE_BLOGPOST,
} from '../actionTypes';

const INITIAL_STATE = [];
// const INITIAL_STATE = [
//   {
//     id: 1,
//     title: 'My First Blog',
//     description: 'This is my first blog, please be nice.',
//   },
//   {
//     id: 2,
//     title: 'My Second Blog',
//     description: 'This is my second blog, you can be more honest.',
//   },
// ];

function blogPost({id, title, description}) {
  return {id, title, description}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Save list of blog summaries in Redux store
    case LOAD_BLOGTITLES:
      return [...action.blogTitles];

    // Add blog to blogTitles state with payload
    case ADD_BLOGPOST:
      return [
        ...state,
        {
          id: action.blogPost.id,
          title: action.blogPost.title,
          description: action.blogPost.description,
        },
      ];

    // Update identified blog in blogTitles state with new payload
    case EDIT_BLOGPOST:
      let editBlogs = state.map(e => {
        if (e.id === action.blogPost.id) {
          return blogPost(action.blogPost);
          // return {
          //   id: action.blogPost.id,
          //   title: action.blogPost.title,
          //   description: action.blogPost.description,
          // };
        } else {
          return e;
        }
      });
      return editBlogs;

    // Remove blog from blogTitles state
    case DELETE_BLOGPOST:
      let deleteBlog = state.filter(
        blogTitle => blogTitle.id !== action.postId
      );
      return deleteBlog;

    default:
      return state;
  }
}

export default rootReducer;
