<template>
  <div class="row">
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: "1", name: "BMW", price: "99" },
        { id: "2", name: "Coca-cola", price: "45" },
        { id: "3", name: "Pepsico", price: "85" },
        { id: "4", name: "Fiat", price: "15" },
        { id: "5", name: "Google", price: "3000" }
      ]
    };
  },
  components: {
    stock: Stock
  }
};
</script>