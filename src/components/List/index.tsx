import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../../store/modules";
import { toggleTodo, Todo } from "../../store/modules/todo";

const List: NextPage = () => {
  const dispatch = useDispatch();

  const todoList = useSelector<RootState, Todo[]>(({ todo }) => todo.todoList);

  const handleListClick = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <ul>
        {todoList.map(
          (todo) => (
            <li onClick={ () => handleListClick(todo.id)} key={todo.id}>
              {todo.id} : {todo.text} / {todo.done ? "[X]" : "[O]"}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default List;
