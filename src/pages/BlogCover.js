import React from 'react';

import "./Blog.css";

function BlogCover(){
    return (
        <div className="shrink">
            <div className='BlogCover'>
                <div className="cover" id="stripped" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
                    <polyline points="0,154 131,0 0,348 269,0 0,562 437,0 
                        0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"/>
                    </svg>
                </div>

                <div className="title title--primary">
                <span className="text-light">Yushan Wang 9801</span>
                <span className="text-bold">POSTS</span>
                </div>

                <div className="title title--secondary">
                <span className="text-light">Yushan Wang 9801</span>
                <span className="text-bold">Posts</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCover;