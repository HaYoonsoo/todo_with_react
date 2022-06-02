import React from "react";
import styled from "styled-components";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import List from "./components/List";
import InputBox from "./components/InputBox";

const AppBody = styled.div``;

const TodoApp = () => {
  return (
    <AppBody>
      <Header />
      <List />
      <InputBox />
    </AppBody>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoApp />}></Route>
      </Routes>
    </>
  );
};

export default App;
