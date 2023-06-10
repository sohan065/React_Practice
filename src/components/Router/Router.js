import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import HomePage from './HomePage';
import Contact from '../../pages/Contact';
import Error from '../../pages/Error';
import Navbar from '../Navbar/Navbar';
import Blogs from '../../pages/Blogs';
import Blog from '../../pages/Blog';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
