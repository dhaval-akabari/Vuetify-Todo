<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit task </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="taskTitle"
          label="Title"
          :rules="rules"
          hide-details="auto"
          autofocus
          @keyup.enter="updateTask"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="primary darken-1"
          text
          @click="updateTask"
          :disabled="taskTitle.length === 0"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: this.task.title,
      rules: [(value) => !!value || "Title is required."],
    };
  },
  methods: {
    updateTask() {
      if (!this.taskTitle) return;
      let payload = {
        id: this.task.id,
        title: this.taskTitle,
      };
      this.$store.dispatch("updateTask", payload);
      this.$emit("close");
    },
  },
};
</script>
