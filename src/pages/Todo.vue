<script setup>
import TodoTemplate from '../components/Templates/TodoTemplate.vue'
import TodoProvider from '../providers/TodoProvider.vue'
</script>

<template>
  <TodoProvider>
    <TodoTemplate />
  </TodoProvider>
</template>