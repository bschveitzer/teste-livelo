<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-block;
  width: 16px;
  height: 16px;
  &:after {
    content: " ";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <span class="lds-dual-ring"></span>
</template>
<script>
export default {
  name: "BsLoader"
};
</script>
