import './App.css';
import React, { useState } from "react";
import Headline from './components/Headline'
import Form from './components/Form';
import TodosList from "./components/TodosList"

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])


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
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
