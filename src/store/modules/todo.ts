import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;

interface Todo {
  id: number,
  text: string,
  done: boolean,
}

interface TodoState {
  todoList: Todo[]
}

const todoSlice = createSlice( {
  name: 'todo',
  initialState: { todoList: Array<Todo>(), },
  reducers: {
    addTodo(state, action) {
      state.todoList.push({
        id: nextId++,
        text: action.payload,
        done: false,
      });
    },
    toggleTodo(state, action) {
      const tochange = state.todoList.find( todo => todo.id === action.payload );
      if (tochange) {
        tochange.done = !tochange.done
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>;
export type { TodoState };
export type { Todo };

export default todoSlice.reducer;