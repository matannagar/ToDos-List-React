import React from 'react'

const Form = ({ input, setInput, todos, setTodos }) => {

    //event listener registering what is written inside the input bar to the app.js state
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    //default action that belongs to the event will not occur
    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a Todo..." className="task-input" value={input} onChange={onInputChange} required />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}

export default Form
