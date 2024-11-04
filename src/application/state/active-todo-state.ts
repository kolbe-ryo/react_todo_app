import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../domain/todo/todo'

// Todoリストを管理するState
export const activeTodoSlice = createSlice({
  name: 'activeTodo',
  initialState: {
    // 初期値未設定でTodo型のnullを設定
    value: null as Todo | null,
  },
  reducers: {
    activeTodoReducer: (state, action: PayloadAction<Todo>) => {
        state.value = action.payload;
    },
  },
})

export const { activeTodoReducer } = activeTodoSlice.actions

export default activeTodoSlice.reducer