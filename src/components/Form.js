import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    //event listener registering what is written inside the input bar to the app.js state
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    //default action that belongs to the event will not occur
    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            //resets todo in bar
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo])

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a Todo..." className="task-input" value={input} onChange={onInputChange} required />
            <button className="button-add" type="submit">{editTodo ? "OK" : "Add"}</button>
        </form>
    )
}

export default Form
