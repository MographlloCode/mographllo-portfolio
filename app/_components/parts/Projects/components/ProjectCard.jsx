import React from 'react'
import ProjectContent from './parts/ProjectContent'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({projectId, rowStart, rowEnd, cardSize, project_title, project_subtitle, colStart, colEnd, mobile, projectImage}) => {

  const projectData = {projectId, rowStart, rowEnd, cardSize, project_title, project_subtitle, colStart, colEnd, mobile, projectImage}

  return (
      <Link href={`/project/${projectId}`} className={`${mobile == true ? 'xl:hidden' : ''} relative row-start-${rowStart} row-end-${rowEnd} col-start-1 col-end-4 border border-[#00171F] dark:border-[#F4E285] hover:bg-[#00171F]/80 dark:hover:bg-[#F4E285]/80 transition-all ease-in-out group text-[#F4E285] dark:text-[#00171F] group`}>
        <div className='absolute inset-0 z-0'>
          <Image src={projectImage} alt='tripo' layout='fill' objectFit='cover' />
        </div>
        <ProjectContent projectData={projectData}/>
      </Link>
  );
}



export default ProjectCard