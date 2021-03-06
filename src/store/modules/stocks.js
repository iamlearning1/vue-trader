import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      // prettier-ignore
      stock.price = parseInt(stock.price * ((1 + Math.random()) - 0.5), 10);
    });
  }
};

const actions = {
  buyStocks({ commit }, order) {
    commit("BUY_STOCK", order);
  },
  setStocks({ commit }) {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks({ commit }) {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => state.stocks
};

export default {
  state,
  mutations,
  actions,
  getters
};
