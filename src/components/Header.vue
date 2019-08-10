<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" to="/portfolio" class="nav-item" activeClass="active">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link tag="li" to="/stocks" class="nav-item" activeClass="active">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right pr-3">Funds: {{ funds }}</strong>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
.active {
  color: black;
  font-weight: bold;
}
</style>