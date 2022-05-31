import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todo";

const InputBox = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleButtonClick = () => {
    dispatch(addTodo(text));
  };

  return (
    <>
      <input value={text} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>+</button>
    </>
  );
};

export default InputBox;
