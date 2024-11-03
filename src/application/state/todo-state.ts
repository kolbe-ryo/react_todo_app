import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../domain/todo/todo'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [] as Todo[],
  },
  reducers: {
    todosReducer: (state, action: PayloadAction<Todo[]>) => {
        state.value = [...action.payload];
    },
    // TODO: activeTOdoを保存するreducerを作成する
  },
})

// Action creators are generated for each case reducer function
export const { todosReducer } = todosSlice.actions

export default todosSlice.reducer