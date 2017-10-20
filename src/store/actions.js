import * as types from './mutation-types'

export const addToCart = ({ commit }, invId) => {
  commit(types.ADD_TO_CART, invId);
}

export const removeFromCart = ({ commit }, index) => {
  commit(types.REMOVE_FROM_CART, index);
}