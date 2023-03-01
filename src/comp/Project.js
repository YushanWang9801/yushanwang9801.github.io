import React from 'react';

import "../css/Project.css";

import ProjectTitle from './Projects/ProjectTitle';
import ProjectCard from './Projects/ProjectCard';

import projects from "./Projects/projects.json"; 

function Project () {

    return (
        <div className="project">
            <ProjectTitle />
            <div className='project-grid'>
                {projects.map(project => (
                    <ProjectCard proj={project}/>
                ))}
            </div>
        </div>
    );
}

export default Project;