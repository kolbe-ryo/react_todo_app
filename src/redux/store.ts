import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../application/state/todo-state'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;