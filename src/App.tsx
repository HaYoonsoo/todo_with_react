import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import List from "./components/List";
import InputBox from "./components/InputBox";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial;
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
  }
`;

const AppBody = styled.div``;

const TodoApp = () => {
  return (
    <>
      <GlobalStyle />
      <AppBody>
        <Header />
        <List />
        <InputBox />
      </AppBody>
    </>
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
