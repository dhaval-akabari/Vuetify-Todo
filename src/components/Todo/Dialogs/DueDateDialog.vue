<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDueDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      date: this.task.dueDate,
    };
  },
  methods: {
    saveDueDate() {
      let payload = {
        id: this.task.id,
        dueDate: this.date,
      };
      this.$store.dispatch("saveDueDate", payload);
      this.$emit("close");
    },
  },
};
</script>
