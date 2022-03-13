import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function Blogposts() {

    return (
        <>
            <h1>Blogposts</h1>
            <p>Overzicht van de blogposts</p>
            <ul>
                {posts.map((post) => {
                return  <li key={`${post.id}-${post.date}`}>
                            <Link to={`/blogpostpage/${post.id}`}>{post.title}
                            </Link>
                        </li>
                })}
            </ul>
        </>
    );
}

export default Blogposts;