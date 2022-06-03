import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/modules/todo';


const InputBox: NextPage = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleButtonClick = () => {
    dispatch(addTodo(text));
  }

  return (
    <div>
      <input value={text} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>생성</button>
    </div>
  );
}

export default InputBox;