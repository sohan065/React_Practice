import React, { useEffect, useState } from 'react';
import { data } from '../components/Data/BlogData';
import { useLocation, useParams } from 'react-router-dom';
export default function Blog() {
    // for use params
    const { title } = useParams();
    const [blogsData, setBlogsData] = useState(data);
    const [bodyData, setBodyData] = useState('');

    // use locattion , value will send via state={}from component
    const location = useLocation();

    // for use params
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => title === blog.title);
    //     setBodyData(blogData[0]);
    // }, [bodyData]);
    return (
        <div>
            <h3>{location.state.title}</h3>
            <p>{location.state.body}</p>
        </div>
    );
}
