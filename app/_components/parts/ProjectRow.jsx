import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

const ProjectRow = ({cards_data, mobileOff}) => {
  return (
    <div className={`${mobileOff ? 'hidden xl:grid' : 'grid'} w-full grid-cols-3 grid-rows-13 gap-4`}>
      {cards_data.map((card, index) => (
        <ProjectCard 
          key={index}
          rowStart={card.rowStart} 
          rowEnd={card.rowEnd} 
          cardSize={card.size} 
          project_title={card.title} 
          project_subtitle={card.subtitle}
          colStart={card.colStart}
          colEnd={card.colEnd}
          mobile={card.mobile}
        />
      ))}
    </div>
  )
}

export default ProjectRow