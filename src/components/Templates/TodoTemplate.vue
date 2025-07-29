<script setup>
import { ref, computed } from 'vue'
import AddTodo from '../Organisms/AddTodo.vue'
import TodoList from '../Organisms/TodoList.vue'
import InputForm from '../Atoms/InputForm.vue'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../../constants/data'

const originTodoList = ref(INIT_TODO_LIST)
const addInputValue = ref('')
const uniqueId = ref(INIT_UNIQUE_ID)
const searchKeyword = ref('')

// 表示用のTodoリストを返す算出プロパティ
const showTodoList = computed(() => {
  return originTodoList.value.filter((todo) => {
    // 検索キーワードに部分一致したTodoだけを一覧表示する
    const regexp = new RegExp('^' + searchKeyword.value, 'i')
    return todo.title.match(regexp)
  })
})

const handleAddTodo = (e) => {
  if (e.key === 'Enter' && addInputValue.value.trim() !== '') {
    const nextUniqueId = uniqueId.value + 1
    originTodoList.value.push({
      id: nextUniqueId,
      title: addInputValue.value.trim()
    })

    // 採番IDを更新
    uniqueId.value = nextUniqueId
    // todo追加後、入力値をリセット
    addInputValue.value = ''
  }
}

const handleDeleteTodo = (targetId, targetTitle) => {
  if (window.confirm(`「${targetTitle}」を削除しますか？`)) {
    const newTodoList = originTodoList.value.filter((todo) => {
      return todo.id !== targetId
    })
    originTodoList.value = newTodoList
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Todo List</h1>
  </div>
  <!-- Todo 追加エリア -->
  <section class="common">
    <AddTodo v-model:addInputValue="addInputValue" :onAddTodo="handleAddTodo" />
  </section>
  <!-- Todo 検索エリア -->
  <section class="common">
    <InputForm v-model="searchKeyword" :placeholder="`Search Keyword`" />
  </section>
  <!-- Todo 一覧表示エリア -->
  <section class="common">
    <TodoList :todoList="showTodoList" @onDeleteTodo="handleDeleteTodo" />
  </section>
</template>

<style scoped>
.container {
  width: 50%;
  margin: 80px auto;
}

.title {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
  font-size: 48px;
}

.common {
  width: 80%;
  margin: 40px auto;
}
</style>