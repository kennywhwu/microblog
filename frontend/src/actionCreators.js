// Action creators to define types and payloads to return to the root reducer

import {
  LOAD_BLOGTITLES,
  LOAD_BLOGPOST,
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  DELETE_BLOGPOST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SHOW_ERR,
  SHOW_LOADING,
  STOP_LOADING,
} from './actionTypes';

import axios from 'axios';
const API_URL = 'http://localhost:5000/api/posts';

// Loading message until API call is returned

function startLoad() {
  return { type: SHOW_LOADING };
}

// End loading when API call is returned

function stopLoad() {
  return { type: STOP_LOADING };
}

// Error handler

function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

// Return action to load list of blog summaries in Redux store

function gotBlogTitles(blogTitles) {
  return { type: LOAD_BLOGTITLES, blogTitles };
}

// async thunk action creator to get blog list from API call
export function getBlogListFromAPI() {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogTitles = await axios.get(`${API_URL}`);
      dispatch(stopLoad());
      return dispatch(gotBlogTitles(blogTitles.data));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to load specific blog post in Redux store

function gotBlogPost(blogPost) {
  return { type: LOAD_BLOGPOST, blogPost };
}

// async thunk action creator to get specific blog post from API call
export function getBlogPostFromAPI(postId) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.get(`${API_URL}/${postId}`);
      dispatch(stopLoad());
      return dispatch(gotBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to add new blog post in Redux store

function addedBlogPost(blogPost) {
  return { type: ADD_BLOGPOST, blogPost };
}

// async thunk action creator to add new blog post to API
export function addBlogPostToAPI(blog) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.post(`${API_URL}`, blog);
      dispatch(stopLoad());
      return dispatch(addedBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to edit blog post in Redux store

function editedBlogPost(blogPost) {
  return { type: EDIT_BLOGPOST, blogPost };
}

// async thunk action creator to edit blog post to API
export function editBlogPostToAPI(blog) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.put(`${API_URL}/${blog.id}`, blog);
      dispatch(stopLoad());
      return dispatch(editedBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to delete blog post in Redux store

function deletedBlogPost(postId) {
  return { type: DELETE_BLOGPOST, postId };
}

// async thunk action creator to delete blog post from API
export function deleteBlogPostToAPI(postId) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      await axios.delete(`${API_URL}/${postId}`);
      dispatch(stopLoad());
      return dispatch(deletedBlogPost(postId));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to add new blog comment in Redux store

function addedComment(comment) {
  return { type: ADD_COMMENT, comment };
}

// async thunk action creator to add new comment to specific blog in API
export function addCommentToAPI(comment) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const newComment = await axios.post(
        `${API_URL}/${comment.blog_id}/comments`,
        comment
      );
      dispatch(stopLoad());
      return dispatch(addedComment(newComment.data));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}

// Return action to delete specific blog comment in Redux store

function deletedComment(commentId) {
  return { type: DELETE_COMMENT, commentId };
}

// async thunk action creator to delete specific comment from specific blog in API
export function deleteCommentToAPI(comment) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      await axios.delete(
        `${API_URL}/${comment.blog_id}/comments/${comment.id}`
      );
      dispatch(stopLoad());
      return dispatch(deletedComment(comment.id));
    } catch (err) {
      dispatch(showErr(err.message));
      dispatch(stopLoad());
    }
  };
}
