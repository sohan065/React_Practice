import React, { useState } from 'react';
import { data } from '../components/Data/BlogData';
import { Link } from 'react-router-dom';
export default function Blogs() {
    const [blogs, setBlogs] = useState(data);

    const trunCate = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <div>
            <section>
                {blogs.map((blog) => {
                    const { title, body } = blog;
                    return (
                        <article key={blog.id}>
                            <h3>{title}</h3>
                            <p>{trunCate(body, 100)}</p>
                            <Link to={title}>Learn More</Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
