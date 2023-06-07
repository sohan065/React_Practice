import React, { useState } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';
import UseEffect from '../UseEffect/UseEffect';
import Data from '../UseFetch/Data';
<<<<<<< HEAD
import FormikForm from '../Formik/FormikForm';
=======
import Reduser from '../UseReduser/Reduser';
>>>>>>> c962397b62741103f3abdbb05b3cc49d7acaefb3

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
            {/* <Data /> */}
<<<<<<< HEAD
            <FormikForm />
=======
            <Reduser />
>>>>>>> c962397b62741103f3abdbb05b3cc49d7acaefb3
        </div>
    );
}
