import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodoItem text={item.text} key={item.id}></TodoItem>;
      })}
    </ul>
  );
};

export default Todos;
