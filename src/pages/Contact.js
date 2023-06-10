import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    return (
        <div>
            <p>This is Contact Page</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}
