import { CHANGE_TITLE } from "../actions/actionTypes";

const initialState = {
  title: 'Default title'
}

export default (state = initialState, action) => {
  switch (action.type) {

  case CHANGE_TITLE:
    return { 
      ...state,
      title: action.payload.val
    }

  default:
    return state
  }
}
