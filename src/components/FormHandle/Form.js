import React, { useState } from 'react';

export default function Form() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    const handleChange = (e) => {
        e.stopPropagation();
        const fieldName = e.target.name;
        const value = e.target.value;
        if (fieldName === 'name') {
            setUser({ name: value, email, password });
        }
        if (fieldName === 'email') {
            setUser({ name, email: value, password });
        }
        if (fieldName === 'password') {
            setUser({ name, email, password: value });
        }
    };
    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
    };
    return (
        <div>
            <h1>Registration Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" value={name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </div>

                <button type="submit">submit</button>
            </form>
        </div>
    );
}
