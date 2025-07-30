<script setup>
import { provide } from 'vue'
import { useTodoProvider } from '../composables/useTodoProvider'

const { showTodoList, searchKeyword, addInputValue, handleAddTodo, handleDeleteTodo } = useTodoProvider()

provide('showTodoList', showTodoList)
provide('searchKeyword', searchKeyword)
provide('addInputValue', addInputValue)
provide('handleAddTodo', handleAddTodo)
provide('handleDeleteTodo', handleDeleteTodo)
</script>

<template>
  <slot />
</template>