import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, Todo } from '../../modules/todo';
import { RootState } from '../../modules';

const List = () => {

  const dispatch = useDispatch();
  const todoList = useSelector<RootState, Array<Todo>>( (state) => state.todo.todoList );

  const handleListClick = (id: number) => {
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