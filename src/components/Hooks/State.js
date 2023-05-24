import React, { useState } from 'react';

export default function State() {
    const [count, setState] = useState(0);
    const handleIncrement = () => {
        setState(count + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
