<script setup>
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseLayout from '../Organisms/BaseLayout.vue'
import InputForm from '../Atoms/InputForm.vue'
import TextArea from '../Atoms/TextArea.vue'
import CommonButton from '../Atoms/CommonButton.vue'
import { NAVIGATION_PATH } from '../../constants/navigation'

const router = useRouter()
const route = useRoute()
const todoId = route.params.id

const originTodoList = inject('originTodoList')
const handleUpdateTodo = inject('handleUpdateTodo')
const todo = originTodoList.value.find((todo) => String(todo.id) === todoId)

const handleSubmitUpdateTodo = (e) => {
  e.preventDefault()
  const formElements = e.target.elements
  handleUpdateTodo(todoId, formElements.title.value, formElements.content.value)
  router.push(`${NAVIGATION_PATH.TOP}`)
}
</script>

<template>
  <BaseLayout title="Edit Todo" @submit.prevent="handleSubmitUpdateTodo">
    <form class="container">
      <div class="area">
        <InputForm v-model="todo.title" name="title" placeholder="Title" />
      </div>
      <div class="area">
        <TextArea v-model="todo.content" name="content" placeholder="Content" />
      </div>
      <div class="area">
        <CommonButton type="submit" label="Update" />
      </div>
    </form>
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