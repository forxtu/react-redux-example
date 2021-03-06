import { INCREASE, DECREASE, REMOVE_ITEM } from '../actions/actionTypes';

const initialState = {
  age: 25,
  history: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case INCREASE:
    return { 
      ...state,
      age: state.age + action.payload.val,
      history: state.history.concat({id: Math.random(), age: state.age + action.payload.val})
    }

  case DECREASE:
    return { 
      ...state,
      age: state.age - action.payload.val,
      history: [...state.history, {id: Math.random(), age: state.age - action.payload.val}]
    }

  case REMOVE_ITEM:
    return { 
      ...state,
      history: state.history.filter(el => el.id !== action.payload.id)
    }
    

  default:
    return state
  }
}
