import React from 'react';
import {useParams} from "react-router-dom";
import posts from '../data/posts.json';

function Blogpostpage() {
    const { blogId } = useParams();
    const blog = posts[blogId];
    return (
        <>
            <h1>Blogpost</h1>
            <p>{blog.id} {blog.title}</p>
            <p>{blog.content}</p>
        </>
    );
}

export default Blogpostpage;