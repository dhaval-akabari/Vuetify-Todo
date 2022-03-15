<template>
  <v-text-field
    v-model.trim="task"
    class="pa-2"
    outlined
    label="Add task"
    append-icon="mdi-plus-circle"
    hide-details="auto"
    clearable
    @keyup.enter="addTask"
  >
    <template v-slot:append>
      <v-icon color="primary" @click="addTask" :disabled="!task"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
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
