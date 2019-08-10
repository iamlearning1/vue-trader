<template>
  <div>
    <stock v-for="stock in stocks" :key="stock.stockId" :stock="stock"></stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  components: {
    stock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
};
</script>