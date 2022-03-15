<template>
  <v-text-field
    v-model.trim="task"
    class="pa-2"
    outlined
    label="Add task"
    append-icon="mdi-plus-circle"
    hide-details
    clearable
    @click:append="addTask"
    @keyup.enter="addTask"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      if (!this.task) return;
      this.$store.dispatch("addTask", this.task);
      this.task = "";
    },
  },
};
</script>