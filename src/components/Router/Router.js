import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import HomePage from './HomePage';
import Contact from '../../pages/Contact';
import Error from '../../pages/Error';
import Navbar from '../Navbar/Navbar';
import Blogs from '../../pages/Blogs';
import Blog from '../../pages/Blog';
import User from '../../pages/User';
import Chat from '../../pages/Chat';
import Protected from './Protected';

export default function Router() {
    const [isLogIn, setIslogIn] = useState(false);
    return (
        <BrowserRouter>
            <Navbar />
            {isLogIn ? (
                <button
                    onClick={() => {
                        setIslogIn(!isLogIn);
                    }}>
                    Log Out
                </button>
            ) : (
                <button
                    onClick={() => {
                        setIslogIn(!isLogIn);
                    }}>
                    Log In
                </button>
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/user" element={<User />} />
                <Route
                    path="/chat"
                    element={
                        <Protected isLogIn={isLogIn}>
                            <Chat />
                        </Protected>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
