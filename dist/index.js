"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
const modules_1 = __importDefault(require("./modules"));
const store = (0, toolkit_1.configureStore)({ reducer: modules_1.default });
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, null))));