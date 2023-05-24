import React, { useState } from 'react';

export default function UpdateState() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((count) => {
            return count + 1;
        });
        setCount((count) => count + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
