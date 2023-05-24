import React from 'react';
import useFetch from './useFetch';

export default function Data() {
    const { data } = useFetch('https://jsonplaceholder.typicode.com/todos');

    console.log(data);
    return (
        <div>
            {data &&
                data.map((data) => {
                    return <p key={data.id}>Title: {data.title}</p>;
                })}
        </div>
    );
}
