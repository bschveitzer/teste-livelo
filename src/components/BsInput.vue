<style lang="scss" scoped>
$active-color: white;
$muted-color: #9e9e9e;
$error-color: #f44336;

.field {
  position: relative;
  display: flex;
  &.field--style-basic {
    margin-top: 10px;
  }

  &.field--style-outlined {
    border: 2px solid $muted-color;
    border-radius: 5px;
    padding: 10px;
    .field__input {
      border-bottom: none !important;
    }
    .field__label {
      top: 2px;
    }
    &.field--action-focus {
      border-color: $active-color;
    }
  }

  .field__input {
    color: $muted-color;
    background: none;
    font-size: 16px;
    padding: 5px;
    display: block;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $muted-color;
    font-family: inherit;
    &:focus {
      outline: none;
      border-color: $active-color;
      ~ .field__label,
      ~ .field__icon {
        color: $active-color;
      }
    }
    &.field__input--state-error {
      border-color: $error-color;
      ~ .field__label,
      ~ .field__icon {
        color: $error-color;
      }
    }
  }

  .field__label {
    color: $muted-color;
    top: -14px;
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    transition: 320ms ease all;
  }

  .field__icon {
    color: $muted-color;
    cursor: pointer;
  }
}

.message {
  font-size: 12px;
  &.message--state-error {
    color: $error-color;
  }
}
</style>
<template>
  <validation-provider
    :rules="{ required: required === true, email: type === 'email' }"
    v-slot="{ errors }"
  >
    <div
      :class="{
        field: true,
        'field--style-outlined': outlined,
        'field--action-focus': focus === true,
        'field--style-basic': !outlined && label
      }"
    >
      <input
        :class="{ field__input: true, 'field__input--state-error': errors[0] }"
        :type="type"
        :ref="name"
        :value="value"
        :placeholder="placeholder"
        :disabled="loading"
        @input="updateValue()"
        @focus="focus = true"
        @blur="focus = false"
        @keyup.enter="actionTriggered"
      />
      <label v-if="label" class="field__label" :for="name">{{ label }}</label>
      <i
        v-if="appendIcon && !loading"
        class="material-icons field__icon"
        @click="actionTriggered"
        >{{ appendIcon }}</i
      >
      <bs-loader v-if="loading" />
    </div>
    <span class="message message--state-error"> {{ errors[0] }}</span>
  </validation-provider>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import BsLoader from "./BsLoader.vue";

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
  props: [
    "value",
    "name",
    "type",
    "label",
    "loading",
    "required",
    "outlined",
    "placeholder",
    "append-icon"
  ],
  components: {
    ValidationProvider,
    BsLoader
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
      this.$emit("action-triggered");
    }
  }
};
</script>
