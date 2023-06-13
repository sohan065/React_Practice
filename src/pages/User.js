import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function User() {
    const [searchParam, setSearchParam] = useSearchParams();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam({ name: name, age: age });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <button type="submit">find </button>
            </form>

            {/* {searchParam.get('id')} */}
        </div>
    );
}
