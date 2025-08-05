<script setup>
import TodoProvider from './providers/TodoProvider.vue'
</script>

<template>
    <TodoProvider>
    <router-view />
  </TodoProvider>
</template>