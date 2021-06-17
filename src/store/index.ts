import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state:any) {
      state.count++;
    },
    max(state:any) {
      state.count = 999;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});
