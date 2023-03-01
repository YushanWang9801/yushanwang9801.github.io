import React from 'react';
import BlogCover from './Blog/BlogCover';
import BlogGrid from './Blog/BlogGrid';

function Blog () {
    return (
        <div className="Blog">
            <BlogCover />
            <BlogGrid />
        </div>
    );
}

export default Blog;