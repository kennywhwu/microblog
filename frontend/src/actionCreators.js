// Action creators to define types and payloads to return to the root reducer

import {
  DELETE_BLOG,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  LOAD_BLOGTITLES,
  LOAD_BLOGPOST,
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  SHOW_ERR,
  SHOW_LOADING
} from './actionTypes';

import axios from 'axios';
const API_URL = 'http://localhost:5000';

// Loading message until API call is returned

function startLoad() {
  return { type: SHOW_LOADING };
}

// Error handler

function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

// Load list of blog summaries

function gotBlogTitles(blogTitles) {
  return { type: LOAD_BLOGTITLES, blogTitles };
}

// Load specific blog post

function gotBlogPost(blogPost) {
  return { type: LOAD_BLOGPOST, blogPost };
}

// Add new blog post

function addedBlogPost(blogPost) {
  return { type: ADD_BLOGPOST, blogPost };
}

// Edit blog post

function editedBlogPost(blogPost) {
  return { type: EDIT_BLOGPOST, blogPost };
}

// async thunk action creator to get blog list from API call
export function getBlogListFromAPI() {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogTitles = await axios.get(`${API_URL}/api/posts`);
      return dispatch(gotBlogTitles(blogTitles.data));
    } catch (err) {
      dispatch(showErr(err));
    }
  };
}

// async thunk action creator to get specific blog post from API call
export function getBlogPostFromAPI(postId) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.get(`${API_URL}/api/posts/${postId}`);
      return dispatch(gotBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err));
    }
  };
}

// async thunk action creator to add new blog post to API
export function addBlogPostToAPI(blog) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.post(`${API_URL}/api/posts`, blog);
      return dispatch(addedBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err));
    }
  };
}

// async thunk action creator to edit blog post to API
export function editBlogPostToAPI(blog) {
  return async function(dispatch) {
    dispatch(startLoad());
    try {
      const blogPost = await axios.put(`${API_URL}/api/posts/${blog.id}`, blog);
      return dispatch(editedBlogPost(blogPost.data));
    } catch (err) {
      dispatch(showErr(err));
    }
  };
}

export function deleteBlog(id) {
  return {
    type: DELETE_BLOG,
    id
  };
}

// example comment object: { id: 1, text: 'comment', blog_id: 1 };

// export function addComment(comment) {
//   return {
//     type: ADD_COMMENT,
//     payload: { ...comment, id: uuid() }
//   };
// }

export function deleteComment(comment) {
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

// export function addBlog(blog) {
//   return {
//     type: ADD_BLOG,
//     payload: { ...blog, id: slugify(blog.title, { lower: true }), comments: {} }
//   };
// }

// export function deleteBlog(id) {
//   return {
//     type: DELETE_BLOG,
//     id
//   };
// }

// export function editBlog(blog) {
//   return {
//     type: EDIT_BLOG,
//     payload: blog
//   };
// }

// // example comment object: { id: 1, text: 'comment', blog_id: 1 };

// export function addComment(comment) {
//   return {
//     type: ADD_COMMENT,
//     payload: { ...comment, id: uuid() }
//   };
// }

// export function deleteComment(comment) {
//   return {
//     type: DELETE_COMMENT,
//     payload: comment
//   };
// }

// export function editComment(comment) {
//   return {
//     type: EDIT_COMMENT,
//     payload: comment
//   };
// }
