import {
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from './actionTypes';

const INITIAL_STATE = { blogs: {} };

// example state:
// {
//   blogs: {
//     1: {
//       id: 1,
//       title: 'Blog 1 Title',
//       description: 'Blog 1 desc',
//       body: 'Blog 1 body',
//       comments: {
//         1: { text: 'Blog 1 comment 1' },
//         2: { text: 'Blog 1 comment 2' }
//       }
//     }
//   }
// };

// example comment object: { id: 1, text: 'comment', blog_id: 1 };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Add blog to store
    case ADD_BLOG:
      return {
        ...state,
        blogs: {
          ...state.blogs,
          [action.payload.id]: action.payload
        }
      };

    // Remove blog from store
    case DELETE_BLOG:
      let deleteBlogs = { ...state.blogs };
      delete deleteBlogs[action.id];
      return { ...state, blogs: deleteBlogs };

    // Update identified blog in store
    case EDIT_BLOG:
      let editBlogs = { ...state.blogs };
      editBlogs[action.payload.id] = action.payload;
      return { ...state, blogs: editBlogs };

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
      return { ...state, blogs: { ...state.blogs, comments: deleteComments } };

    // Update identified comment from specific blog post in store
    case EDIT_COMMENT:
      let editComments = { ...state.blogs[action.payload.blog_id].comments };
      editComments[action.payload.id] = action.payload.text;
      return { ...state, comments: editComments };

    default:
      return state;
  }
}

export default rootReducer;
