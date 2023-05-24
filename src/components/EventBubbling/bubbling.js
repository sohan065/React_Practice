import React from 'react';

export default function bubbling() {
    const handleParentEvent = (e) => {
        console.log('parent');
    };
    const handleChildEvent = (e) => {
        e.stopPropagation();

        console.log('child');
    };
    return (
        <div onClick={handleParentEvent}>
            <h1>hello</h1>
            <button onClick={handleChildEvent}>Increment</button>
        </div>
    );
}
