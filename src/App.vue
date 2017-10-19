<template>
  <div id="app" class="container my-5">

    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <shopping-cart></shopping-cart>
      </div>
    </div>

    <div class="row">

      <item v-for="item in forSale" :item="item" :key="item.invId"></item>

    </div>

  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Item from './Item.vue'
  import ShoppingCart from './ShoppingCart.vue'

  export default {
    name: 'app',

    computed: {
      ...mapGetters(['forSale', 'inCart'])
    },

    components: {
      Item,
      ShoppingCart
    }
  };
</script>

<style>
  /* Nothing for now */
</style>