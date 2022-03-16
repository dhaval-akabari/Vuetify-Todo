<template>
  <div class="text-subtitle-1 ml-4">{{ currentDate }}</div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      currentDate: "",
    };
  },
  methods: {
    getDate() {
      this.currentDate = format(new Date(), "MMMM, do H:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
