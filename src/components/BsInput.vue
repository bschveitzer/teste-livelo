<style lang="scss" scoped>
$active-color: white;
$muted-color: #9e9e9e;
$error-color: #f44336;

.container {
  position: relative;
  display: flex;
  &.basic {
    margin-top: 10px;
  }
}

.input {
  color: $muted-color;
  background: none;
  font-size: 16px;
  padding: 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $muted-color;
  font: inherit;
  &:focus {
    outline: none;
    border-color: $active-color;
    ~ .label, ~ .icon {
      color: $active-color;
    }
  }
  &.error {
    border-color: $error-color;
    ~ .label, ~ .icon {
      color: $error-color;
    }
  }
}

.outlined {
  border: 2px solid $muted-color;
  border-radius: 5px;
  padding: 10px;
  .input {
    border-bottom: none !important;
  }
  .label {
    top: 2px;
  }
  &.focus {
    border-color: $active-color;
  }
}

.label {
  color: $muted-color;
  top: -14px;
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 320ms ease all;
}

.icon {
  color: $muted-color;
  cursor: pointer;
}
.message {
  font-size: 12px;
  &.error {
    color: $error-color;
  }
}
</style>
<template>
  <validation-provider
    :rules="{ required: required === true, email: type === 'email' }"
    v-slot="{ errors }"
  >
    <div :class="{ container: true, outlined, focus: focus === true, basic: (!outlined && label) }">
      <input
        :class="{ input: true, error: errors[0] }"
        :type="type"
        :ref="name"
        :value="value"
        :placeholder="placeholder"
        @input="updateValue()"
        @focus="focus = true"
        @blur="focus = false"
        @keyup.enter="actionTriggered"
      />
      <label v-if="label" class="label" :for="name">{{ label }}</label> 
      <i v-if="appendIcon" class="material-icons icon" @click="actionTriggered">{{ appendIcon }}</i>
    </div>
    <span class="message error"> {{ errors[0] }}</span>
  </validation-provider>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Campo obrigatório."
});
extend("email", {
  ...email,
  message: "E-mail inválido."
});
export default {
  name: "BsInput",
  props: ["value", "name", "type", "label", "required", "outlined", "placeholder", "append-icon"],
  components: {
    ValidationProvider
  },
  data() {
    return {
      focus: false
    };
  },
  methods: {
    updateValue() {
      this.$emit("input", this.$refs[this.name].value);
    },
    actionTriggered() {
      console.log('chegou aqui')
      this.$emit("action-triggered");
    }
  }
};
</script>
