/* CLASSIC WAY */

// import * as types from './types'

// const initialState = {
//   title: 'Default title'
// }

// export default (state = initialState, action) => {
//   switch (action.type) {

//   case types.CHANGE_TITLE:
//     return { 
//       ...state,
//       title: action.payload.val
//     }

//   default:
//     return state
//   }
// }


/* USING createReducer UTIL FUNCTION */

import * as types from './types'
import createReducer from '../../utils/createReducer'

const initialState = {
  title: 'Default title'
}

const titleReducer = createReducer(initialState)({
  [types.CHANGE_TITLE]: (state, action) => {
    const { newTitle } = action.payload;
    console.log(state);
    return {
      ...state,
      title: newTitle
    }
  }
});

export default titleReducer;