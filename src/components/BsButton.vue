<style lang="scss" scoped>
$default-color: #2196f3;
$error-color: #f44336;
$add-color: #4caf50;

button {
  position: relative;
  min-width: 100px;
  max-width: 100%;
  height: 50px;
  display: block;
  margin: 15px auto;
  padding: 15px;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: $default-color;
  color: #ecf0f1;
  transition: background-color 0.3s;
  &.error {
    background-color: $error-color;
  }
  &.add {
    background-color: $add-color;
  }
  &:hover:not(.disabled),
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
  &.disabled {
    background-color: #eeeeee;
    color: #8d8d8d;
    box-shadow: none;
  }
}
</style>
<template>
  <div>
    <button
      :class="{ add: type === 'add', disabled }"
      @click="handleClick()"
      :disabled="disabled"
    >
      <span v-if="!loading">{{ text }}</span>
      <bs-loader v-else />
    </button>
  </div>
</template>
<script>
import BsLoader from "./BsLoader.vue";
export default {
  name: "BsButton",
  props: ["type", "text", "loading", "disabled"],
  components: {
    BsLoader
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
