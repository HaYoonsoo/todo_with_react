"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const Header = () => {
    const todoList = (0, react_redux_1.useSelector)((state) => state.todo.todoList);
    const total = (0, react_2.useMemo)(() => todoList.length, [todoList]);
    const done = (0, react_2.useMemo)(() => todoList.filter((todo) => todo.done).length, [todoList]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Header"),
        react_1.default.createElement("span", null,
            total - done,
            " / ",
            total)));
};
exports.default = Header;
