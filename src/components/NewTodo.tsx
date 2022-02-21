import React, { useRef } from "react";

const NewTodo = () => {
  const enteredInputRef = useRef<HTMLInputElement>(null);
  const enteredInput = enteredInputRef.current.value;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredInput.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={enteredInputRef}></input>
      <button>Add a todo</button>
    </form>
  );
};

export default NewTodo;
