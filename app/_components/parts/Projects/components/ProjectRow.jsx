import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectRow = ({cards_data, mobile}) => {
  return (
    <div className={`${mobile == true ? 'hidden xl:grid' : 'grid'} w-full grid-cols-3 grid-rows-13 gap-4`}>
      {cards_data.map((card, index) => (
        <ProjectCard 
          key={index}
          projectId={card.projectId}
          rowStart={card.rowStart} 
          rowEnd={card.rowEnd} 
          cardSize={card.size} 
          project_title={card.title} 
          project_subtitle={card.subtitle}
          colStart={card.colStart}
          colEnd={card.colEnd}
          mobile={card.mobile}
          projectImage={card.projectImage}
          techStack={card.techStack}
        />
      ))}
    </div>
  )
}

export default ProjectRow