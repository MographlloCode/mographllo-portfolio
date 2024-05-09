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
                title: "Real Trust",
                subtitle: "",
                projectImage: "/img/real_trust/real_trust_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
            {
                projectId: "2",
                rowStart: "5",
                rowEnd: "9",
                size: "small",
                title: "Cycle",
                subtitle: "",
                projectImage: "/img/cycle/cycle_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
            {
                projectId: "4",
                rowStart: "9",
                rowEnd: "12",
                size: "mobile",
                title: "Byte Bank",
                subtitle: "",
                mobile: true,
                projectImage: "/img/byte_bank/byte_bank_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
        ],
        "mobile": true
    },
    {
        "cards_data": [
            {
                projectId: "3",
                rowStart: "1",
                rowEnd: "4",
                size: "medium",
                title: "Legacy eSports",
                subtitle: "",
                projectImage: "/img/legacy/legacy_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
            {
                projectId: "4",
                rowStart: "4",
                rowEnd: "10",
                size: "medium",
                title: "Byte Bank",
                subtitle: "",
                projectImage: "/img/byte_bank/byte_bank_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
            {
                projectId: "5",
                rowStart: "10",
                rowEnd: "12",
                size: "mobile",
                title: "Wellness",
                subtitle: "",
                mobile: true,
                projectImage: "/img/wellness/wellness_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
        ],
        "mobile": false
    },
    {
        "cards_data": [
            {
                projectId: "6",
                rowStart: "1",
                rowEnd: "5",
                size: "large",
                title: "Goal",
                subtitle: "",
                projectImage: "/img/goal/goal_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
            {
                projectId: "5",
                rowStart: "5",
                rowEnd: "7",
                size: "small",
                title: "Wellness",
                subtitle: "",
                projectImage: "/img/wellness/wellness_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
            },
        ],
        "mobile": false
    },
    {
        "cards_data": [
            {
                projectId: "7",
                rowStart: "1",
                rowEnd: "7",
                size: "tall",
                title: "Evo FITI",
                subtitle: "",
                projectImage: "/img/evo_fiti/evo_fiti_header.png",
                techStack: [
                    "html",
                    "css",
                    "javascript",
                    "figma",
                ]
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