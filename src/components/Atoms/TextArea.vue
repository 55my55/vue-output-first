<script setup>
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  });

  defineEmits(['update:modelValue']);
</script>

<template>
  <textarea
    :disabled="disabled"
    class="text"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
  .text {
    color: #fff;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 5px;
    resize: none;
    min-height: 100px;
  }

  .text:disabled {
    color: #c0c0c0;
  }

  .text::placeholder {
    color: #c0c0c0;
  }
</style>
