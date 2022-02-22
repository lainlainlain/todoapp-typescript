import React, { useRef } from "react";
import { TodosContext } from "../store/todo-context";
import { useContext } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const enteredInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredInput = enteredInputRef.current!.value;

    if (enteredInput.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredInput);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={enteredInputRef}></input>
      <button>Add a todo</button>
    </form>
  );
};

export default NewTodo;
