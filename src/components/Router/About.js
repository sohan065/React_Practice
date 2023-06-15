import React, { useCallback, useState } from 'react';
import Message from '../../pages/Message';

export default function About() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    console.log('app rendering');
    return (
        <div>
            <h1>Count : {count}</h1>
            {toggle ? 'On' : 'Off'}
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}>
                Toggle
            </button>
            <br></br>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                Increment
            </button>
            <Message numberOfMesage={count} onIcrement={handleIncrement} />
        </div>
    );
}
