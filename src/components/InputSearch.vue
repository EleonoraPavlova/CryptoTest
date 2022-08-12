<template>
  <input
    v-focus
    :value="modelValue"
    @input="updateInput"
    autocomplete="off"
    type="text"
    name="wallet"
    id="wallet"
    class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
    placeholder="Enter......"
  />
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
