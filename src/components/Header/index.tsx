import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../modules'
import { Todo } from '../../modules/todo';

const Header = () => {
  const todoList = useSelector<RootState, Array<Todo>>((state ) => state.todo.todoList);

  const total = useMemo( () => todoList.length, [todoList]);
  const done = useMemo( () => todoList.filter( (todo: Todo) => todo.done ).length, [todoList]);

  return (
    <>
      <h1>Header</h1>
      <span>
        {total - done} / {total}
      </span>
    </>
  )
};

export default Header;
