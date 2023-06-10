import React, { useEffect, useState } from 'react';
import { data } from '../components/Data/BlogData';
import { useParams } from 'react-router-dom';
export default function Blog() {
    const { title } = useParams();
    const [blogsData, setBlogsData] = useState(data);
    const [bodyData, setBodyData] = useState('');

    useEffect(() => {
        const blogData = blogsData.filter((blog) => title === blog.title);
        setBodyData(blogData[0]);
    }, [bodyData]);
    return (
        <div>
            <h3>{title}</h3>
            <p>{bodyData.body}</p>
        </div>
    );
}
