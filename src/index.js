import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import App from "./App";
import todoReducer from "./modules/todo";

const store = configureStore( {reducer: todoReducer} );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
