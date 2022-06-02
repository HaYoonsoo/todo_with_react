import { useMemo } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const todoList = useSelector((state) => state.todoList);

  const total = useMemo( () => todoList.length, [todoList]);
  const done = useMemo( () => todoList.filter( todo => todo.done ).length, [todoList]);

  return (
    <>
      <h1>Header</h1>
      <span>
        {total - done} / {total}
      </span>
    </>
  );
};

export default Header;
