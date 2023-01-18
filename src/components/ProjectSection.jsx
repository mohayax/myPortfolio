import React from 'react'
import CardComp from './CardComp';
import './ProjectSection.css';

const ProjectSection = () => {

  return (
    <div className='container-fluid' id='projects'>
        <div className="project-margin">
              <h1>Featured Projects</h1>
              <CardComp />
        </div>
       
    </div>
  )
}

export default ProjectSection