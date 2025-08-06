/**
 * initTodo
 *
 * @package constants
 */
import type { Todo } from '../composables/useTodoProvider'

/**
 * Todoリストの初期値
 */
export const INIT_TODO_LIST: Todo[] = [
  {
    id: 1,
    title: 'Todo1',
    content: ''
  },
  {
    id: 2,
    title: 'Todo2',
    content: ''
  }
]

/**
 * Todo採番IDの初期値
 */
export const INIT_UNIQUE_ID: number = INIT_TODO_LIST.length
