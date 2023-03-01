import React from 'react';
import "../../css/Blog.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight }
            from '@fortawesome/free-solid-svg-icons';

function BlogCard({blog}){
    const img = blog["coverImage"];
    
    return (
        <div className="BlogCard">
            <div className="left-section">
                <div className="time-section">
                    <h2>{blog.date}</h2>
                    <h2>{blog.weekday}</h2>
                </div>
                <div className="title-section">
                    <h1>{blog.name}</h1>
                </div>
            </div>
            <div className="card-section">
                <div className="content">
                    <h3>{blog.short_desc}</h3>
                    <div calssName className="link">
                            <a href={blog.url}><span className="click">
                                Click to Read Article 
                                <FontAwesomeIcon className="faicon" icon={faArrowRight} />
                            </span></a>
                    </div>
                </div>
                <div className="flap-left"  style={{ backgroundImage: `url(${img})`}}></div>
                <div className="flap-right"  style={{ backgroundImage: `url(${img})`}}></div>
            </div>
        </div>
    );
}

export default BlogCard;