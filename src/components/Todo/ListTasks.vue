<template>
  <v-list flat>
    <SingleTask 
      v-for="task in filteredTasks" 
      :key="task.id" 
      :task="task" 
    />
    <div v-if="$store.state.search" class="pl-3 pt-3 text--secondary">
      {{ filteredTasks.length }} task(s) found
    </div>
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
    ...mapGetters(["filteredTasks"]),
  },
};
</script>
