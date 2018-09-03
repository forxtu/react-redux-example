import * as types from "./types"

export const increase = (val) => ({
  type: types.INCREASE,
  payload: { val }
})

export const decrease = (val) => ({
  type: types.DECREASE,
  payload: { val }
})

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  payload: { id }
})
