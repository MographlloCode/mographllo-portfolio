import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectRow from './ProjectRow'

const first_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "5",
        size: "large",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
    {
        rowStart: "5",
        rowEnd: "9",
        size: "small",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
    {
        rowStart: "9",
        rowEnd: "12",
        size: "mobile",
        title: "Project Title",
        subtitle: "Project Subtitle",
        mobile: true
    },
]

const second_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "4",
        size: "medium",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
    {
        rowStart: "4",
        rowEnd: "10",
        size: "medium",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
    {
        rowStart: "10",
        rowEnd: "12",
        size: "mobile",
        title: "Project Title",
        subtitle: "Project Subtitle",
        mobile: true
    },
]

const third_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "5",
        size: "large",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
    {
        rowStart: "5",
        rowEnd: "7",
        size: "small",
        title: "Project Title",
        subtitle: "Project Subtitle",
    },
]

const last_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "7",
        size: "tall",
        title: "Project Title",
        subtitle: "Project Subtitle",
    }
]

const ProjectGrid = ({projects_data}) => {
  return (
    <main className='flex min-h-[48rem] justify-between gap-4 xl:gap-8'>
        <ProjectRow cards_data={first_row_cards_data} />
        <ProjectRow cards_data={second_row_cards_data} mobileOff/>
        <ProjectRow cards_data={third_row_cards_data} mobileOff />
        <ProjectRow cards_data={last_row_cards_data} mobileOff />
    </main>
  )
}

export default ProjectGrid