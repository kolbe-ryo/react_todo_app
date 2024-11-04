import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../application/state/todo-state'
import activeTodoReducer from '../application/state/active-todo-state';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    activeTodo: activeTodoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;