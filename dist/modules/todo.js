"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTodo = exports.addTodo = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
let nextId = 1;
const todoSlice = (0, toolkit_1.createSlice)({
    name: 'todo',
    initialState: { todoList: Array(), },
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
            const tochange = state.todoList.find(todo => todo.id === action.payload);
            if (tochange) {
                tochange.done = !tochange.done;
            }
        },
    },
});
_a = todoSlice.actions, exports.addTodo = _a.addTodo, exports.toggleTodo = _a.toggleTodo;
exports.default = todoSlice.reducer;
