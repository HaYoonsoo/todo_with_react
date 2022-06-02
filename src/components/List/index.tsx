import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../../modules/todo';

const List = () => {

  const dispatch = useDispatch();
  const todoList = useSelector( (state) => state.todoList );

  const handleListClick = (id) => {
    dispatch(toggleTodo(id));
  }
  return (
    <>
    {todoList.map( (todo) => (
      <h2 key={todo.id} onClick={() => handleListClick(todo.id)}>
        {todo.id} / {todo.text } / { todo.done ? 'yes' : 'no' }
      </h2>
    ))}
    </>
  );
}

export default List;