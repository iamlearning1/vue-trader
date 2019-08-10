const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, stockPrice, stockQuantity }) {
    const record = state.stocks.find(stock => stock.stockId === stockId);
    if (record) {
      record.stockQuantity += stockQuantity;
    } else {
      state.stocks.push({
        stockId,
        stockPrice,
        stockQuantity
      });
    }
    state.funds -= stockPrice * stockQuantity;
  },
  SELL_STOCK(state, { stockId, stockPrice, stockQuantity }) {
    const record = state.stocks.find(stock => stock.stockId === stockId);
    if (record.stockQuantity > stockQuantity) {
      record.stockQuantity -= stockQuantity;
    } else {
      state.stocks = state.stocks.filter(stock => stock.stockId !== stockId);
    }
    state.funds += stockPrice * stockQuantity;
  }
};

const actions = {
  sellStocks({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id === stock.stockId);
      return {
        ...stock,
        stockPrice: record.price,
        stockName: record.name
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
