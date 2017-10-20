import * as types from './../mutation-types'

export default {
  state: {
    inCart: [],
  },

  mutations: {
    [types.ADD_TO_CART] (state, invId) {
      state.inCart.push(invId);
    },
    [types.REMOVE_FROM_CART] (state, index) {
      state.inCart.splice(index, 1);
    }
  }
};