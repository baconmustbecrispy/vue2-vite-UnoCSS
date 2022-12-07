<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
