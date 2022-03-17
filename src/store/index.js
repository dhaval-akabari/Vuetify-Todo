import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    tasks: [
      // {
      //   id: 1,
      //   title: "Wake up",
      //   done: false,
      //   dueDate: "2020-03-20",
      // },
      // {
      //   id: 2,
      //   title: "Get bananas",
      //   done: false,
      //   dueDate: "2020-03-21",
      // },
      // {
      //   id: 3,
      //   title: "Eat bananas",
      //   done: false,
      //   dueDate: null,
      // },
    ],
    search: null,
    sorting: false,
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
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
    saveDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setTasks(state, tasks) {
      state.tasks = [...tasks];
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
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    addTask(context, title) {
      let newTask = {
        id: Date.now(),
        title: title,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          context.commit("addTask", newTask);
          context.commit("showSnackbar", "Task added!");
        });
    },
    getTasks(context, payload) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          context.commit("setTasks", tasks);
        });
    },
    setTasks(context, tasks) {
      db.collection("tasks")
        .set(tasks)
        .then(() => {
          context.commit("setTasks", tasks);
        });
    },
    doneTask(context, id) {
      let task = context.state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          context.commit("doneTask", id);
        });
    },
    deleteTask(context, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          context.commit("deleteTask", id);
          context.commit("showSnackbar", "Task deleted!");
        });
    },
    updateTask(context, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          context.commit("updateTask", payload);
          context.commit("showSnackbar", "Task updated!");
        });
    },
    saveDueDate(context, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          context.commit("saveDueDate", payload);
          context.commit("showSnackbar", "Due Date addedd!");
        });
    },
  },
  getters: {
    filteredTasks(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
});
