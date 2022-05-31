import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [todoNumbers, setTodoNumbers] = useState({ total: 0, done: 0 });
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    let total = 0,
      done = 0;
    total = todoList.length;
    todoList.map((todo) => (todo.done ? done++ : false));

    setTodoNumbers({ total, done });
  }, [todoList]);

  return (
    <>
      <h1>Header</h1>
      <span>
        {todoNumbers.total - todoNumbers.done} / {todoNumbers.total}
      </span>
    </>
  );
};

export default Header;
