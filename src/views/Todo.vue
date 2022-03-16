<template>
  <div class="home">
    <AddTaskField />

    <ListTasks v-if="filteredTasks.length" />
    <NoTasks v-else />

    <ButtonSortingDone v-if="$store.state.sorting" />
  </div>
</template>

<script>
import AddTaskField from "@/components/Todo/AddTaskField";
import ListTasks from "@/components/Todo/ListTasks";
import NoTasks from "@/components/Todo/NoTasks";
import ButtonSortingDone from "@/components/Todo/ButtonSortingDone";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    AddTaskField,
    ListTasks,
    NoTasks,
    ButtonSortingDone,
  },
  computed: {
    ...mapGetters(["filteredTasks"]),
  },
};
</script>
