<template>

  <div class="col-md-3">
    <div class="card">
      <img :src="item.image" :alt="item.name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ item.name }}</h4>
        <div class="card-text">{{ item.price | dollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(item.invId)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { dollars } from './filters'
  import { mapActions } from 'vuex';

  export default {
    name: 'item',

    props: {
      item: Object
    },

    methods: {
      ...mapActions(['addToCart'])
    },

    filters: {
      dollars
    }
  };
</script>