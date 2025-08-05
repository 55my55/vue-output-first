<script setup>
import BaseLayout from '../Organisms/BaseLayout.vue'
import TodoList from '../Organisms/TodoList.vue'
import InputForm from '../Atoms/InputForm.vue'
import { inject } from 'vue'

const searchKeyword = inject('searchKeyword')


</script>

<template>
  <BaseLayout title="TodoList">
    <div className="container">
      <section class="area">
        <InputForm v-model="searchKeyword" :placeholder="`Search Keyword`" />
      </section>
      <!-- Todo 一覧表示エリア -->
      <section class="area">
        <TodoList />
      </section>
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