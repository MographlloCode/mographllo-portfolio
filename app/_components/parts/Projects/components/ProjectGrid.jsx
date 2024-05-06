import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectRow from './ProjectRow'

const first_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "5",
        size: "large",
        title: "Project Title",
        subtitle: "Project Subtitle",
        projectLink: "/project",
    },
    {
        rowStart: "5",
        rowEnd: "9",
        size: "small",
        title: "Project Title",
        subtitle: "Project Subtitle",
        projectLink: "/project",

    },
    {
        rowStart: "9",
        rowEnd: "12",
        size: "mobile",
        title: "Project Title",
        subtitle: "Project Subtitle",
        mobile: true,
        projectLink: "/project",
    },
]

const second_row_cards_data = [
    {
        rowStart: "1",
        rowEnd: "4",
        size: "medium",
        title: "Project Title",
        subtitle: "Project Subtitle",
        projectLink: "/project",
    },
    {
        rowStart: "4",
        rowEnd: "10",
        size: "medium",
        title: "Project Title",
        subtitle: "Project Subtitle",
        projectLink: "/project",
    },
    {
        rowStart: "10",
        rowEnd: "12",
        size: "mobile",
        title: "Project Title",
        subtitle: "Project Subtitle",
        mobile: true,
        projectLink: "/project",
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

const projectsData = [
    {
        "cards_data": [
            {
                projectId: "1",
                rowStart: "1",
                rowEnd: "5",
                size: "large",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
            {
                projectId: "2",
                rowStart: "5",
                rowEnd: "9",
                size: "small",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
            {
                projectId: "3",
                rowStart: "9",
                rowEnd: "12",
                size: "mobile",
                title: "Project Title",
                subtitle: "Project Subtitle",
                mobile: true,
                projectImage: "/img/tripio.png",
            },
        ],
        "mobile": true
    },
    {
        "cards_data": [
            {
                projectId: "4",
                rowStart: "1",
                rowEnd: "4",
                size: "medium",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
            {
                projectId: "5",
                rowStart: "4",
                rowEnd: "10",
                size: "medium",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
            {
                projectId: "6",
                rowStart: "10",
                rowEnd: "12",
                size: "mobile",
                title: "Project Title",
                subtitle: "Project Subtitle",
                mobile: true,
                projectImage: "/img/tripio.png",
            },
        ],
        "mobile": false
    },
    {
        "cards_data": [
            {
                projectId: "7",
                rowStart: "1",
                rowEnd: "5",
                size: "large",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
            {
                projectId: "8",
                rowStart: "5",
                rowEnd: "7",
                size: "small",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            },
        ],
        "mobile": false
    },
    {
        "cards_data": [
            {
                projectId: "9",
                rowStart: "1",
                rowEnd: "7",
                size: "tall",
                title: "Project Title",
                subtitle: "Project Subtitle",
                projectImage: "/img/tripio.png",
            }
        ],
        "mobile": false
    },
]

const ProjectGrid = ({projects_data}) => {
  return (
    <main className='flex min-h-[48rem] justify-between gap-4 xl:gap-8'>
        {
            projectsData.map((project_row, i) => (
                <ProjectRow 
                    key={i} 
                    cards_data={project_row.cards_data} 
                    mobile={project_row.mobile ? false : true}
                />
            ))
        }
    </main>
  )
}

export default ProjectGrid