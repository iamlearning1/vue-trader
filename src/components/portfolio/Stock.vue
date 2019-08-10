<template>
  <div class="col-sm-6 col-md-4 mt-4 mb-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.stockName }}
          <small>(Price: {{ stock.stockPrice }} | Quantity: {{ stock.stockQuantity }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="quantity" v-model="quantity" />
        </div>
        <div class="pull-right mt-3">
          <button
            class="btn btn-danger"
            :disabled="quantity > stock.stockQuantity"
            @click="stockSell"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: this.stock.stockQuantity
    };
  },
  methods: {
    ...mapActions(["sellStocks"]),
    stockSell() {
      const order = {
        stockId: this.stock.stockId,
        stockPrice: this.stock.stockPrice,
        stockQuantity: this.quantity
      };
      this.sellStocks(order);
    }
  },
  props: ["stock"]
};
</script>

<style scoped>
small {
  font-size: 1.2rem;
}
</style>