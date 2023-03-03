import React from 'react';

import "../../css/Blog.css";

function BlogCover(){
    return (
        <div className='BlogCover'>
            <div class="cover" id="stripped" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
                <polyline points="0,154 131,0 0,348 269,0 0,562 437,0 
                    0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"/>
                </svg>
            </div>

            <div class="title title--primary">
                <span class="text-light">Yushan Wang 9801</span>
                <span class="text-bold">POSTS</span>
            </div>

            <div class="title title--secondary">
                <span class="text-light">Yushan Wang 9801</span>
                <span class="text-bold">Posts</span>
            </div>
    </div>
    );
}

export default BlogCover;