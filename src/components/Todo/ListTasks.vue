<template>
  <v-list flat>
    <draggable 
      :list="filteredTasks" 
      handle=".handle"
    >
      <SingleTask 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task" />
    </draggable>
    <div v-if="$store.state.search" class="pl-3 pt-3 text--secondary">
      {{ filteredTasks.length }} task(s) found
    </div>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
import SingleTask from "@/components/Todo/SingleTask";
export default {
  components: {
    SingleTask,
    draggable,
  },
  computed: {
    ...mapGetters(["filteredTasks"]),
  },
};
</script>
