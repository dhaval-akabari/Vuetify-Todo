<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon class="mr-2">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <EditDialog v-if="dialog.edit" :task="task" @close="dialog.edit = false" />

    <DueDateDialog
      v-if="dialog.dueDate"
      :task="task"
      @close="dialog.dueDate = false"
    />

    <DeleteDialog
      v-if="dialog.delete"
      :taskId="task.id"
      @close="dialog.delete = false"
    />
  </div>
</template>

<script>
import EditDialog from "@/components/Todo/Dialogs/EditDialog";
import DueDateDialog from "@/components/Todo/Dialogs/DueDateDialog";
import DeleteDialog from "@/components/Todo/Dialogs/DeleteDialog";
export default {
  props: ["task"],
  components: {
    EditDialog,
    DueDateDialog,
    DeleteDialog,
  },
  data() {
    return {
      dialog: {
        edit: false,
        dueDate: false,
        delete: false,
      },
      items: [
        {
          title: "Edit",
          icon: "mdi-pencil",
          click() {
            this.dialog.edit = true;
          },
        },
        {
          title: "Due date",
          icon: "mdi-calendar",
          click() {
            this.dialog.dueDate = true;
          },
        },
        {
          title: "Delete",
          icon: "mdi-delete",
          click() {
            this.dialog.delete = true;
          },
        },
        {
          title: "Sort",
          icon: "mdi-drag-horizontal-variant",
          click() {
            this.$store.commit("toggleSorting");
          },
        },
      ],
    };
  },
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>
