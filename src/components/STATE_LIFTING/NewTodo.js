import React, { useState } from 'react';

export default function NewTodo(props) {
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
        e.stopPropagation();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Todo :</label>
                    <input type="text" name="todo" value={todo} onChange={handleChange} />
                </div>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
