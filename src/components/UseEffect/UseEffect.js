import React, { useEffect, useState } from 'react';

export default function UseEffect() {
    const initial = [];
    const [todos, setTodos] = useState(initial);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTodos(data);
            });
    }, [todos]);
    return (
        <div>
            {todos &&
                todos.map((todo) => {
                    return <p key={todo.id}>Title: {todo.title}</p>;
                })}
        </div>
    );
}
