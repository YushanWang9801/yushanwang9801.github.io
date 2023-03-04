import React from 'react';
// import BlogCover from './Blog/BlogCover';
// import BlogGrid from './Blog/BlogGrid';
import BlogVScode from '../layout/BlogVScode';

function Blog ({theme, path}) {
    return (
        <div className="Blog">
            {/* <BlogCover />
            <BlogGrid /> */}
            <BlogVScode theme={theme} path={path}/>
        </div>
    );
}

export default Blog;