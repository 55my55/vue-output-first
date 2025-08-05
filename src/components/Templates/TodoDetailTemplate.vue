<script setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import BaseLayout from '../Organisms/BaseLayout.vue'
import InputForm from '../Atoms/InputForm.vue'
import TextArea from '../Atoms/TextArea.vue'

const route = useRoute()
const todoId = route.params.id

const originTodoList = inject('originTodoList')
const todo = originTodoList.value.find((todo) => String(todo.id) === todoId)
</script>

<template>
  <BaseLayout title="Todo Detail">
    <div v-if="todo" class="container">
      <div class="area">
        <InputForm v-model="todo.title" disabled="true" name="title" placeholder="Title" />
      </div>
      <div class="area">
        <TextArea v-model="todo.content" disabled="true" name="content" placeholder="Content" />
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 40px auto;
}

.area {
  margin-top: 40px;
}
</style>