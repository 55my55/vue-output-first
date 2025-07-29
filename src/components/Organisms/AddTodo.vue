<script setup>
import { defineProps, defineEmits } from 'vue'
import InputForm from '../Atoms/InputForm.vue'

defineProps({
  addInputValue: {
    type: String,
    required: true
  },
  onAddTodo: {
    type: Function,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <h2 class="subTitle">ADD TODO</h2>
  <InputForm
    :modelValue="addInputValue"
    :placeholder="`Please input todo`"
    @update:modelValue="$emit('update:addInputValue', $event)"
    :onKeydown="onAddTodo"
  />
</template>

<style scoped>
.subTitle {
  text-align: center;
  color: #fff;
}
</style>