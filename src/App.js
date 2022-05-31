/*
import React from 'react';
import './App.css';

const App = () => {
  return (
    <h1>Hi</h1>
  );
}

export default App;
*/

//기능 구현 후에 컴포넌트를 나누자
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./modules/todo";

const App = () => {
  const [text, setText] = useState('');
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addTodo(text));
    setText('');
  };
  const toggle = (id) => {
    dispatch(toggleTodo(id))
  };
  const onChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      {todoList.map((todo) => (
        <h1 key={todo.id} onClick={ () => toggle(todo.id) }>{todo.id} / {todo.text} / {todo.done ? 'true' : 'false'}</h1>
      ))}
      <input value={text} onChange={onChange}/>
      <button onClick={add}>추가</button>
    </>
  );
};

export default App;
