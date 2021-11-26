<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <footer-end></footer-end>
  </div>
</template>
<script>
import FooterEnd from "./components/FooterEnd.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    FooterEnd,
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
