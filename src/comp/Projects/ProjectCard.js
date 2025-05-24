// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight }
//             from '@fortawesome/free-solid-svg-icons';

import "../../css/Project.css";


export default function ProjectCard({proj}) {
    // let source_code;
    // if (proj.source_code_url !== "#"){
    //     source_code = <span className="Code">Source Code</span>;
    // }
    
    return (
    // <div className="ProjectCard">
    //     <div className="card">
    //             <div className="card--display">
    //                 <h2>{proj.name}</h2>
    //                 <h3>{proj.short_desc}</h3>
    //                 <div className="hashtag">
    //                     {proj.tags.map(tag => (<span>{tag}</span>))}
    //                 </div>
    //             </div>
    //             <div className="card--hover">
    //                 <h2>{proj.name}</h2>
    //                 <p>{proj.desc}</p>
    //                 <div className="link">
    //                     <span className="click">
    //                          Click to see project 
    //                         <FontAwesomeIcon className="faicon" icon={faArrowRight} />
    //                     </span>
    //                     {source_code}
    //                 </div>
    //             </div>
    //         <div className="card--border"></div>
    //     </div>
    // </div>
        <div className="ProjectCard">
            <div className="project-image">
                <img src={proj.coverImage} alt={proj.name} />
            </div>
            <div className="project-details">
                <h3>{proj.name}</h3>
                <h5>{proj.short_desc}</h5>
                <p className="full-desc">{proj.desc}</p>
                <div className="hashtag">
                    {proj.tags.map(tag => (<span>{tag}</span>))}
                </div>
                {/* <div className="link">
                         <span className="click">
                            Click to see project 
                            <FontAwesomeIcon className="faicon" icon={faArrowRight} />
                     </span>
                     {source_code}
                </div> */}
            </div>
        </div>
    );
}