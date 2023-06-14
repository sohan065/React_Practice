import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Chat() {
    const [users, setUsers] = useState([]);

    const userData = async () => {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
    };
    useEffect(() => {
        userData();
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <article>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </article>
                );
            })}
        </div>
    );
}
