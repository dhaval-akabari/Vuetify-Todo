<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{
              'text-decoration-line-through grey--text': task.done,
            }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <TaskActions :task="task" />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn icon class="handle">
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
import TaskActions from "@/components/Todo/TaskActions";
export default {
  props: ["task"],
  components: {
    TaskActions,
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM, do");
    },
  },
  methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    },
  },
};
</script>
