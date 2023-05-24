import React, { useState } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';
import UseEffect from '../UseEffect/UseEffect';
import Data from '../UseFetch/Data';

export default function Home() {
    const dummyTodos = ['todo1', 'todo2', 'todo3'];
    const [todos, setNewTodo] = useState(dummyTodos);
    const handleNewTodo = (newTodo) => {
        setNewTodo([...todos, newTodo]);
    };
    return (
        <div>
            {/* <NewTodo onNewTodo={handleNewTodo} />
            <Todos todos={todos} /> */}
            {/* <UseEffect /> */}
            <Data />
        </div>
    );
}
