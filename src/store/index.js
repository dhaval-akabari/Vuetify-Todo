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
        dueDate: "2020-03-20",
      },
      {
        id: 2,
        title: "Get bananas",
        done: false,
        dueDate: "2020-03-21",
      },
      {
        id: 3,
        title: "Eat bananas",
        done: false,
        dueDate: null,
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
        dueDate: null,
      });
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTask(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
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
    updateTask(context, payload) {
      context.commit("updateTask", payload);
      context.commit("showSnackbar", "Task updated!");
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});
