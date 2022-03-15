<template>
  <v-list flat>
    <SingleTask v-for="task in getTasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
import SingleTask from "@/components/Todo/SingleTask";
export default {
  components: {
    SingleTask,
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>