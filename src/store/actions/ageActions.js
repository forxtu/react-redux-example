import { INCREASE, DECREASE, REMOVE_ITEM } from "./actionTypes";

export const increase = (val) => ({
  type: INCREASE,
  payload: { val }
})

export const decrease = (val) => ({
  type: DECREASE,
  payload: { val }
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id }
})
