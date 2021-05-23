<template>
  <div class="thinking-box-container">
    <v-card class="text-box" height="10vh" width="40vw"> {{ thinkingTopic }} </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thinkingTopic: "Unceratini",
    };
  },
};
</script>

<style lang="scss" src="./thinking-box.scss" scoped >
</style>