// Reducer for defining manipulations on Redux store based on dispatch action types

import { combineReducers } from 'redux';

import blogPostReducer from './blogPost';
import blogTitleReducer from './blogTitles';

export default combineReducers({
  blogPost: blogPostReducer,
  blogTitles: blogTitleReducer
});
