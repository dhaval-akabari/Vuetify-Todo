import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Get bananas",
        done: false,
      },
      {
        id: 3,
        title: "Eat bananas",
        done: false,
      },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    addTask(state, title) {
      state.tasks.push({
        id: Date.now(),
        title: title,
        done: false,
      });
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTask(context, title) {
      context.commit("addTask", title);
      context.commit("showSnackbar", "Task added!");
    },
    deleteTask(context, id) {
      context.commit("deleteTask", id);
      context.commit("showSnackbar", "Task deleted!");
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});
