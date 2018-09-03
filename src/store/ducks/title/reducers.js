// import { combineReducers } from "redux";

import * as types from './types'

// import { createReducer } from "../../utils";

const initialState = {
  title: 'Default title'
}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.CHANGE_TITLE:
    return { 
      ...state,
      title: action.payload.val
    }

  default:
    return state
  }
}