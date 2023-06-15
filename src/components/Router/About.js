import React, { useState } from 'react';
import Message from '../../pages/Message';

export default function About() {
    const [count, setCount] = useState();

    console.log('app rendering');
    return (
        <div>
            <h1>Count : {count}</h1>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                Increment
            </button>
            <Message />
        </div>
    );
}
