// Reducer for defining manipulations on loading state in Redux store based on dispatch action types

import { SHOW_LOADING, STOP_LOADING } from '../actionTypes';

const INITIAL_STATE = '';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Show page loading message when request hasn't yet returned
    case SHOW_LOADING:
      return 'Page loading...';
    // Stop showing loading message when request returns
    case STOP_LOADING:
      return '';

    default:
      return state;
  }
}

export default rootReducer;
