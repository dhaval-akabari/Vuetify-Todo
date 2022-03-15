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
    
    <EditDialog
      v-if="dialog.edit"
      :task="task"
      @close="dialog.edit = false"
    />
    
    <DeleteDialog
      v-if="dialog.delete"
      :taskId="task.id"
      @close="dialog.delete = false"
    />
  </div>
</template>

<script>
import DeleteDialog from "@/components/Todo/Dialogs/DeleteDialog";
import EditDialog from "@/components/Todo/Dialogs/EditDialog";
export default {
  props: ["task"],
  components: {
    DeleteDialog,
    EditDialog,
  },
  data() {
    return {
      dialog: {
        edit: false,
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
            console.log("due date");
          },
        },
        {
          title: "Delete",
          icon: "mdi-delete",
          click() {
            this.dialog.delete = true;
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

<style></style>
