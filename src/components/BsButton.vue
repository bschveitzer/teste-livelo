<style lang="scss" scoped>
$default-color: #24292e;
$error-color: #f44336;
$add-color: #4caf50;

.button {
  position: relative;
  min-width: 100px;
  max-width: 100%;
  height: 50px;
  display: flex;
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
  align-items: center;
  font-weight: 600;
  margin: 5px;
  &.button--state-error {
    background-color: $error-color;
  }
  &.button--state-success {
    background-color: $add-color;
  }
  &:hover:not(.disabled),
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
  &.button--state-disabled {
    background-color: #eeeeee;
    color: #8d8d8d;
    box-shadow: none;
  }
  .button__icon {
    padding-right: 5px;
  }
}
</style>
<template>
  <div>
    <button
      :class="{ button: true, 'button--state-success': type === 'success', 'button--state-disabled': disabled === true }"
      @click="handleClick()"
      :disabled="disabled"
    >
      <i
        v-if="appendIcon && !loading"
        class="material-icons button__icon"
        >{{ appendIcon }}</i
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
  props: ["type", "text", "loading", "disabled", "append-icon"],
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
