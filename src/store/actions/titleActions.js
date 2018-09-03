import { CHANGE_TITLE } from './actionTypes'

export const changeTitle = (val) => ({
  type: CHANGE_TITLE,
  payload: { val }
})