import React from 'react'
import ProjectTechStack from './ProjectTechStack'
import ProjectLinks from './ProjectLinks'
import ProjectCardTitle from './ProjectCardTitle'
import ProjectContent from './ProjectContent'
import Link from 'next/link'

const ProjectCard = ({rowStart, rowEnd, cardSize, project_title, project_subtitle, colStart, colEnd, mobile}) => {

  const projectData = {rowStart, rowEnd, cardSize, project_title, project_subtitle, colStart, colEnd, mobile}

  return (
      <Link href={'/project'} suppressHydrationWarning className={`${mobile == true ? 'xl:hidden' : ''} row-start-${rowStart} row-end-${rowEnd} col-start-1 col-end-4 border border-[#00171F] dark:border-[#F4E285] hover:bg-[#00171F] dark:hover:bg-[#F4E285]/80 transition-all ease-in-out group text-[#F4E285] dark:text-[#00171F]`}>
        <ProjectContent projectData={projectData} />
      </Link>
  );
}



export default ProjectCard