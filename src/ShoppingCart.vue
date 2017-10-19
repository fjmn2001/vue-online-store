<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ inCart.length }})</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
              <tr v-for="(item, index) in cart">
                <td>{{ item.name }}</td>
                <td>{{ item.price | dollars }}</td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                </td>
              </tr>
              <tr>
                <th></th>
                <th>{{ total | dollars }}</th>
                <th></th>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary">Check out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { dollars } from './filters'

  export default {
    name: 'shoppingCart',

    methods: {
      ...mapActions(['removeFromCart'])
    },

    computed: {
      ...mapGetters(['inCart', 'forSale']),
      cart() {
        return this.inCart.map(cartItem => {
          return this.forSale.find(forSaleItem => {
            return cartItem === forSaleItem.invId;
          });
        });
      },
      total() {
        return this.cart.reduce((acc, current) => acc + current.price, 0);
      }
    },

    filters:{
      dollars
    }
  };
</script>