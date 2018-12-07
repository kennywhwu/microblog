// Reducer for defining manipulations on combination of state types in Redux store based on dispatch action types

import { combineReducers } from 'redux';

import blogPostReducer from './blogPost';
import blogTitleReducer from './blogTitles';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  blogPost: blogPostReducer,
  blogTitles: blogTitleReducer,
  error: errorReducer,
  loading: loadingReducer,
});
