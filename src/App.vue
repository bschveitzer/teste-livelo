<style lang="less">
html {
  overflow: auto;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
<template>
  <div>
    <bs-header></bs-header>
    <router-view></router-view>
  </div>
</template>
<script>
import BsHeader from './components/BsHeader.vue'

export default {
  name: "App",
  components: {
    BsHeader
  }
};
</script>
