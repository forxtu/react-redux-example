import * as types from './types'

export const changeTitle = (newTitle) => ({
  type: types.CHANGE_TITLE,
  payload: newTitle 
})