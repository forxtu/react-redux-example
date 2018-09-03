import { createStore, combineReducers } from 'redux'

// import rootReducer from './reducers/rootReducer'
import * as reducers from "./ducks";

// export const store = createStore(
//   rootReducer,
//   window.devToolsExtension && window.devToolsExtension()
// );

export default function configureStore( initialState ) {
  const rootReducer = combineReducers( reducers );

  return createStore(
      rootReducer,
      initialState
  );
}