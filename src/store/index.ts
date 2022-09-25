import { createStore } from "vuex";

import { State } from "../type/state";

export default createStore<State>({
  state: {
    todos: ["Do excercise", "Make videos", "Go shopping"],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
