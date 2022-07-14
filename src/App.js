import './App.css';
import React, { useState, useEffect } from "react";
import Todos from "./components/Todos"
import Headline from './components/Headline'
import Form from './components/Form';

const App = () => {

  const loadState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(loadState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <div className="app-wrapper">
        <div>
          <Headline />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
