"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const List_1 = __importDefault(require("./components/List"));
const InputBox_1 = __importDefault(require("./components/InputBox"));
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  * {
    font-family: Arial;
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
  }
`;
const AppBody = styled_components_1.default.div ``;
const TodoApp = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyle, null),
        react_1.default.createElement(AppBody, null,
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(List_1.default, null),
            react_1.default.createElement(InputBox_1.default, null))));
};
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(TodoApp, null) }))));
};
exports.default = App;
