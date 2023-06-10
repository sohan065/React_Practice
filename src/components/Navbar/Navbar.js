import React from 'react';
import { Link } from 'react-router-dom';

import style from '../MODULE/contact.module.css';
export default function Navbar() {
    return (
        <nav className={style['nav']}>
            <Link to="/" className={style['nav-link']}>
                Home
            </Link>
            <Link to="/contact" className={style['nav-link']}>
                Contact
            </Link>
            <Link to="/about" className={style['nav-link']}>
                About
            </Link>
            <Link to="/blogs" className={style['nav-link']}>
                Blog
            </Link>
        </nav>
    );
}
