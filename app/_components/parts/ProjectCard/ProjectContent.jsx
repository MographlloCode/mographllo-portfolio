import React from 'react'
import ProjectCardTitle from './ProjectCardTitle'
import ProjectTechStack from './ProjectTechStack'
import ProjectLinks from './ProjectLinks'

const ProjectContent = ({projectData}) => {
  return (
    <div className="hidden group-hover:flex flex-col gap-2 p-4 items-center justify-center transition-all ease-in-out w-full h-full">
        <ProjectCardTitle title={projectData.project_title} subtitle={projectData.project_subtitle} />
        <div className='flex flex-col gap-4'>
            <ProjectTechStack />
        </div>
    </div>
  )
}

export default ProjectContent