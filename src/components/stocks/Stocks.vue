<template>
  <div class="row">
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: {
    stock: Stock
  }
};
</script>