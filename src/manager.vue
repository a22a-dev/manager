<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './components/dashboard.vue'
export default {
  name: 'App',
  components: {
    Dashboard,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* align-content: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
