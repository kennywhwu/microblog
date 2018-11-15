// Action creators to define types and payloads to return to the root reducer

import {
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from './actionTypes';

export function addBlog(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  };
}

export function deleteBlog(id) {
  return {
    type: DELETE_BLOG,
    id
  };
}

export function editBlog(blog) {
  return {
    type: EDIT_BLOG,
    payload: blog
  };
}

// example comment object: { id: 1, text: 'comment', blog_id: 1 };

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
}

export function deleteComment(comment) {
  console.log('deleteComment comment', comment);
  return {
    type: DELETE_COMMENT,
    payload: comment
  };
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    payload: comment
  };
}
