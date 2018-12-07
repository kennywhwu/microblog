// Reducer for defining manipulations on error state in Redux store based on dispatch action types

import { SHOW_ERR } from '../actionTypes';

const INITIAL_STATE = '';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Show errors message when request returns an error
    case SHOW_ERR:
      return action.msg;

    default:
      return state;
  }
}

export default rootReducer;
