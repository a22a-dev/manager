<template>
  <v-app>
    <div class="dashboard">
      <div>
        <thinking-box></thinking-box>
      </div>
      <div class="task-container">
        <one-time-tasks></one-time-tasks>
        <recurring-tasks></recurring-tasks>
      </div>
    </div>
  </v-app>
</template>

<script>
import ThinkingBox from "./thinking-box/thinking-box";
import OneTimeTasks from "./one-time-tasks/one-time-tasks";
import RecurringTasks from "./recurring-tasks/recurring-tasks";

export default {
  components: {
    ThinkingBox,
    OneTimeTasks,
    RecurringTasks,
  },
};
</script>

<style>
</style>