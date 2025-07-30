<script setup>
import { inject } from 'vue'
import InputForm from '../Atoms/InputForm.vue'

defineEmits(['update:modelValue'])

const addInputValue = inject('addInputValue')
const handleAddTodo = inject('handleAddTodo')
</script>

<template>
  <h2 class="subTitle">ADD TODO</h2>
  <InputForm
    v-model="addInputValue"
    :placeholder="`Please input todo`"
    :onKeydown="handleAddTodo"
  />
</template>

<style scoped>
.subTitle {
  text-align: center;
  color: #fff;
}
</style>