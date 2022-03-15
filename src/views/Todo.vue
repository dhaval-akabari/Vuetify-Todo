<template>
  <div class="home">
    <AddTaskField />

    <ListTasks v-if="getTasks.length" />
    <NoTasks v-else />
  </div>
</template>

<script>
import AddTaskField from "@/components/Todo/AddTaskField";
import ListTasks from "@/components/Todo/ListTasks";
import NoTasks from "@/components/Todo/NoTasks";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    AddTaskField,
    ListTasks,
    NoTasks,
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>
