<template>
  <div class="col-sm-6 col-md-4 mt-4 mb-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div>
          <input type="number" class="form-control" placeholder="quantity" v-model="quantity" />
          <p v-if="insufficientFunds">Sorry! You have insufficient funds.</p>
        </div>
        <div class="mt-3">
          <button
            class="btn btn-success"
            :disabled="quantity <= 0 || insufficientFunds"
            @click="sellStock"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientFunds() {
      return this.$store.getters.funds < this.stock.price * this.quantity;
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: parseInt(this.quantity, 10)
      };
      this.$store.dispatch("buyStocks", order);
      this.quantity = 0;
    }
  },
  props: ["stock"]
};
</script>

<style scoped>
small {
  font-size: 1.2rem;
}
p {
  color: red;
}
</style>