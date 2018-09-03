import * as types from './types'

const initialState = {
  age: 25,
  history: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.INCREASE:
    return { 
      ...state,
      age: state.age + action.payload.val,
      history: state.history.concat({id: Math.random(), age: state.age + action.payload.val})
    }

  case types.DECREASE:
    return { 
      ...state,
      age: state.age - action.payload.val,
      history: [...state.history, {id: Math.random(), age: state.age - action.payload.val}]
    }

  case types.REMOVE_ITEM:
    return { 
      ...state,
      history: state.history.filter(el => el.id !== action.payload.id)
    }
    

  default:
    return state
  }
}
