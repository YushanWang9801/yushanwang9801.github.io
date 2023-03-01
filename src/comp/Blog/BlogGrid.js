import React from 'react';
import BlogCard from './BlogCard';

import blogs from "./blogs-data.json";

function BlogGrid () {
    return (
        <div className="Blog-grid">
                {Object.entries(blogs)
                        .map(([_, blog]) => (
                        <BlogCard blog={blog}/>
                        ))}
        </div>
    );
}

export default BlogGrid;