import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";
import { useContext } from "react";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default Todos;
