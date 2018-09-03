import * as types from './types';

export const changeTitle = (val) => ({
  type: types.CHANGE_TITLE,
  payload: { val }
})