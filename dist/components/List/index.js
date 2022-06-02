"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const todo_1 = require("../../modules/todo");
const List = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const todoList = (0, react_redux_1.useSelector)((state) => state.todo.todoList);
    const handleListClick = (id) => {
        dispatch((0, todo_1.toggleTodo)(id));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, todoList.map((todo) => (react_1.default.createElement("h2", { key: todo.id, onClick: () => handleListClick(todo.id) },
        todo.id,
        " / ",
        todo.text,
        " / ",
        todo.done ? 'yes' : 'no')))));
};
exports.default = List;
