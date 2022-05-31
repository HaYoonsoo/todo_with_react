import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;

const todoSlice = createSlice( {
  name: 'todo',
  initialState: { todoList: [] },
  reducers: {
    addTodo(state, action) {
      console.log(action);
      state.todoList = state.todoList.concat( {
        id: nextId++,
        text: action.payload,
        done: false,
      })
    },
    toggleTodo(state, action) {
      console.log(action);
      state.todoList = state.todoList.map( (todo) => (
        todo.id === action.payload ?
        { ...todo, done: !todo.done }:
        todo
      ));
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;