import React from 'react'
import ProjectCardTitle from './ProjectCardTitle'
import ProjectTechStack from './ProjectTechStack'
import Link from 'next/link'
import Icon from '@/app/_components/Icon'

const ProjectContent = ({projectData}) => {
  return (
    <div className="hidden absolute hover:bg-[#00171F]/80 dark:hover:bg-[#F4E285]/80 backdrop-blur-sm group-hover:flex flex-col gap-2 p-4 items-center justify-center transition-all ease-in-out w-full h-full z-10">
        <ProjectCardTitle title={projectData.project_title} subtitle={projectData.project_subtitle} />
        <div className='flex flex-col gap-4 items-centeraa'>
            <ProjectTechStack techStack={projectData.techStack} />
            <Link href={`project/${projectData.projectId}`} className='flex gap-1 items-center montserrat font-semibold'>
              View project page
              <Icon icon_name={'right_arrow'} className='h-4'/>
            </Link>
        </div>
    </div>
  )
}

export default ProjectContent