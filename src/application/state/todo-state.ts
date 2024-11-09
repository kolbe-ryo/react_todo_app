import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../domain/todo/todo';

// Todoリストを管理するState
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [] as Todo[],
  },
  reducers: {
    todosReducer: (state, action: PayloadAction<Todo[]>) => {
        state.value = [...action.payload];
    },
  },
})

export const { todosReducer } = todosSlice.actions

export default todosSlice.reducer