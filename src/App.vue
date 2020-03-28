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
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
