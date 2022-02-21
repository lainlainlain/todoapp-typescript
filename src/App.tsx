import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

import "./App.css";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn TS")];

  return <Todos items={todos}></Todos>;
}

export default App;
