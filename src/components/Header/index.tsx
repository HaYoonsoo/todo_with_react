import type { NextPage } from "next";
import { useSelector } from "react-redux";
import type { RootState } from "../../store//modules";
import type { Todo } from "../../store/modules/todo";

const Header: NextPage = () => {
  const todoList = useSelector<RootState, Todo[]>(({ todo }) => todo.todoList);

  const total = todoList.length;
  const done = todoList.filter((todo: Todo) => todo.done).length;

  return (
    <div>
      <h1>Header</h1>
      <span>
        {total - done} / {total}
      </span>
    </div>
  );
};

export default Header;
