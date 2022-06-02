import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;

export interface Todo {
  id: number,
  text: string,
  done: boolean,
}

const todoSlice = createSlice( {
  name: 'todo',
  initialState: { todoList: Array<Todo>(), },
  reducers: {
    addTodo(state, action) {
      /* immer가 이미 적용됨
      console.log(action);
      state.todoList = state.todoList.concat( {
        id: nextId++,
        text: action.payload,
        done: false,
      })
      */
      state.todoList.push({
        id: nextId++,
        text: action.payload,
        done: false,
      });
    },
    toggleTodo(state, action) {
      /* immer가 이미 적용됨
      console.log(action);
      state.todoList = state.todoList.map( (todo) => (
        todo.id === action.payload ?
        { ...todo, done: !todo.done }:
        todo
      ));
      */
      const tochange = state.todoList.find( todo => todo.id === action.payload );
      if (tochange) {
        tochange.done = !tochange.done
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;