import { ref, computed } from 'vue'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data'

/**
 * Todo型の定義
 */
export interface Todo {
  id: number
  title: string
  content: string
}

export const useTodoProvider = () => {
  const originTodoList = ref<Todo[]>(INIT_TODO_LIST)
  const uniqueId = ref<number>(INIT_UNIQUE_ID)
  const searchKeyword = ref<string>('')

  // 表示用のTodoリストを返す算出プロパティ
  const showTodoList = computed<Todo[]>(() => {
    const regexp = new RegExp('^' + searchKeyword.value, 'i')
    return originTodoList.value.filter((todo) => {
      return todo.title.match(regexp)
    })
  })

  const handleAddTodo = (title: string, content: string): void => {
    if (title.trim() !== '' && content.trim() !== '') {
      const nextUniqueId = uniqueId.value + 1
      originTodoList.value.push({
        id: nextUniqueId,
        title: title.trim(),
        content: content.trim(),
      })
      uniqueId.value = nextUniqueId
    }
  }

  const handleUpdateTodo = (
    targetId: number | string,
    title: string,
    content: string
  ): void => {
    originTodoList.value = originTodoList.value.map((todo) => {
      if (String(todo.id) === String(targetId)) {
        return {
          ...todo,
          title: title.trim(),
          content: content.trim(),
        }
      }
      return todo
    })
  }

  const handleDeleteTodo = (targetId: string, targetTitle: string) => {
    if (window.confirm(`「${targetTitle}」を削除しますか？`)) {
      const newTodoList = originTodoList.value.filter((todo) => {
        return String(todo.id) !== targetId;
      });
      originTodoList.value = newTodoList;
    }
  };

  return {
    originTodoList,
    showTodoList,
    searchKeyword,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  }
}
