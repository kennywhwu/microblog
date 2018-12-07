// Reducer for defining manipulations on blogPost in Redux store based on dispatch action types

import {
  LOAD_BLOGPOST,
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  DELETE_BLOGPOST,
  LOAD_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../actionTypes';

const INITIAL_STATE = {};
// const INITIAL_STATE = {
//   13: {
//     id: 13,
//     title: 'First Post',
//     description: 'best post ever!',
//     votes: 0,
//     comments: [
//       { id: 1, text: 'First comment!' },
//       { id: 2, text: 'Second comment!' },
//     ],
//   },
// };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Save list of blog summaries in Redux store
    case LOAD_BLOGPOST:
      return { ...action.blogPost };

    // Update blogPost state with added blog post
    case ADD_BLOGPOST:
      return { ...action.blogPost };

    // Update blogPost state with edited blog post
    case EDIT_BLOGPOST:
      let comments = state.comments;
      return { ...action.blogPost, comments };

    // Remove blog from blogPost state
    case DELETE_BLOGPOST:
      return {};

    // Save list of comments for blog in blogPost store
    case LOAD_COMMENTS:
      return { ...state, comments: action.comments };

    // Update blogPost store with added blog comment
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.comment] };

    // Update blogPost store to delete blog comment
    case DELETE_COMMENT:
      let resultComments = state.comments.filter(
        comment => comment.id !== action.commentId
      );
      return { ...state, comments: resultComments };

    default:
      return state;
  }
}

export default rootReducer;
