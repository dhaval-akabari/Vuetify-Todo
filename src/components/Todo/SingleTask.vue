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
        <v-list-item-action>
          <!-- <v-btn @click.stop="dialog.delete = true" icon>
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn> -->
          <TaskActions />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>

    <DeleteDialog
      v-if="dialog.delete"
      :taskId="task.id"
      @close="dialog.delete = false"
    />
  </div>
</template>

<script>
import DeleteDialog from "@/components/Shared/DeleteDialog";
import TaskActions from "@/components/Todo/TaskActions";
export default {
  props: ["task"],
  components: {
    DeleteDialog,
    TaskActions,
  },
  data() {
    return {
      dialog: {
        delete: false,
      },
    };
  },
  methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    },
  },
};
</script>
