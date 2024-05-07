import React from 'react'
import ProjectRow from './ProjectRow'

const projectsData = [
    {
        "cards_data": [
            {
                projectId: "1",
                rowStart: "1",
                rowEnd: "5",
                size: "large",
                title: "Real Trust Realtor",
                subtitle: "Real Trust Realtor",
                projectImage: "/img/real_trust_header.png",
            },
            {
                projectId: "2",
                rowStart: "5",
                rowEnd: "9",
                size: "small",
                title: "Cycle",
                subtitle: "Cycle APP",
                projectImage: "/img/cycles_header.png",
            },
            {
                projectId: "3",
                rowStart: "9",
                rowEnd: "12",
                size: "mobile",
                title: "Byte Bank",
                subtitle: "Byte Bank APP",
                mobile: true,
                projectImage: "/img/byte_bank_header.png",
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
                title: "Legacy eSports",
                subtitle: "Legacy eSports",
                projectImage: "/img/legacy_header.png",
            },
            {
                projectId: "5",
                rowStart: "4",
                rowEnd: "10",
                size: "medium",
                title: "Byte Bank",
                subtitle: "Byte Bank",
                projectImage: "/img/byte_bank_header.png",
            },
            {
                projectId: "6",
                rowStart: "10",
                rowEnd: "12",
                size: "mobile",
                title: "Wellness",
                subtitle: "Wellness APP",
                mobile: true,
                projectImage: "/img/wellness_header.png",
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
                title: "Goal",
                subtitle: "Goal APP",
                projectImage: "/img/goal_header.png",
            },
            {
                projectId: "8",
                rowStart: "5",
                rowEnd: "7",
                size: "small",
                title: "Wellness",
                subtitle: "Wellness APP",
                projectImage: "/img/wellness_header.png",
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
                title: "Evo FITI",
                subtitle: "Evo FITI APP",
                projectImage: "/img/evo_fiti_header.png",
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