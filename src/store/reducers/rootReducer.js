import { combineReducers } from 'redux';

import ageReducer from './ageReducer'
import titleReducer from './titleReducer';

const rootReducer = combineReducers({
  ageR: ageReducer,
  titleR: titleReducer
})

export default rootReducer