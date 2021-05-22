<template>
  <div class="dashboard">
    <div>
      <thinking-box></thinking-box>
    </div>
    <div class="task-container">
      <one-time-tasks></one-time-tasks>
      <recurring-tasks></recurring-tasks>
    </div>
  </div>
</template>

<script>
import ThinkingBox from './thinking-box/thinking-box';
import OneTimeTasks from './thinking-box/thinking-box';
import RecurringTasks from './thinking-box/thinking-box';

export default {
  components: {
    ThinkingBox,
    OneTimeTasks,
    RecurringTasks,
  }
};
</script>

<style>
</style>