'use client'
import { useParams } from 'next/navigation'
import ProjectHeader from '../../_components/parts/ProjectPage/ProjectHeader'
import TechStack from '../../_components/parts/ProjectPage/TechStack'
import Archtect from '../../_components/parts/ProjectPage/Archtect'
import ProjectLinks from '../../_components/parts/ProjectPage/ProjectLinks'
import ProjectCards from '../../_components/parts/ProjectPage/ProjectCards'

const projects = [
  // Real Trust - ID 1
  {
    "project_id": 1,
    "project_title": "Real Trust",
    "project_description": "Realtor platform landing page",
    "tech_stack": [
        {
            "label": "Javascript",
            "icon_name": "javascript"
        },
        {
            "label": "NextJS",
            "icon_name": "nextjs"
        },
        {
            "label": "NodeJS",
            "icon_name": "nodejs"
        },
        {
            "label": "ReactJS",
            "icon_name": "react"
        },
        {
            "label": "HTML 5",
            "icon_name": "html"
        },
        {
            "label": "CSS 3",
            "icon_name": "css"
        },
        {
            "label": "Tailwind",
            "icon_name": "tailwind"
        }
    ],
    "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "card_grid": [
        {
        "column_position": 1,
        "cards": [
            {
            "card_title": "Testimonials Section",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 7,
            "card_image": "/img/real_trust/card_01.png",
            },
            {
            "card_title": "Projects Section",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 7,
            "row_end": 12,
            "card_image": "/img/real_trust/card_02.png",
            },
        ],
        },
        {
        "column_position": 2,
        "cards": [
            {
            "card_title": "Landing Page",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 12,
            "card_image": "/img/real_trust/card_03.png",
            },
        ],
        },
    ],
    "project_links": [
        {
        "link_name": "Github Repo",
        "link_url": "https://github.com/MographlloCode/spacews",
        },
        {
        "link_name": "Live Demo",
        "link_url": "https://mographllocode.github.io/spacews/",
        },
    ]
  },
  // Cycle - ID 2
  {
  "project_id": 2,
  "project_title": "Cycle",
  "project_description": "Eco-Friendly APP",
  "tech_stack": [
    {
      "label": "Python",
      "icon_name": "python"
    },
    {
      "label": "Django",
      "icon_name": "django"
    },
    {
      "label": "NodeJS",
      "icon_name": "nodejs"
    },
    {
      "label": "NextJS",
      "icon_name": "nextjs"
    },
    {
      "label": "ReactJS",
      "icon_name": "react"
    },
    {
      "label": "HTML 5",
      "icon_name": "html"
    },
    {
      "label": "CSS 3",
      "icon_name": "css"
    },
    {
      "label": "Tailwind",
      "icon_name": "tailwind"
    },
  ],
  "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "card_grid": [
    {
      "column_position": 1,
      "cards": [
        {
          "card_title": "Card 1",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 1,
          "row_end": 7,
          "card_image": "/img/cycle/card_01.png",
        },
        {
          "card_title": "Card 2",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 7,
          "row_end": 12,
          "card_image": "/img/cycle/card_02.png",
        },
      ],
    },
    {
      "column_position": 2,
      "cards": [
        {
          "card_title": "Card 3",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 1,
          "row_end": 12,
          "card_image": "/img/cycle/card_03.png",
        },
      ],
    },
  ],
  "project_links": [
    {
      "link_name": "Github Repo",
      "link_url": "https://github.com/MographlloCode/spacews",
    },
    {
      "link_name": "Live Demo",
      "link_url": "https://mographllocode.github.io/spacews/",
    },
  ]
  },
  // Legacy - ID 3
  {
  "project_id": 3,
  "project_title": "Legacy eSports",
  "project_description": "eSports Organization",
  "tech_stack": [
    {
      "label": "Python",
      "icon_name": "python"
    },
    {
      "label": "Django",
      "icon_name": "django"
    },
    {
      "label": "NodeJS",
      "icon_name": "nodejs"
    },
    {
      "label": "NextJS",
      "icon_name": "nextjs"
    },
    {
      "label": "ReactJS",
      "icon_name": "react"
    },
    {
      "label": "HTML 5",
      "icon_name": "html"
    },
    {
      "label": "CSS 3",
      "icon_name": "css"
    },
    {
      "label": "Tailwind",
      "icon_name": "tailwind"
    },
  ],
  "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "card_grid": [
    {
      "column_position": 1,
      "cards": [
        {
          "card_title": "Card 1",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 1,
          "row_end": 7,
          "card_image": "/img/legacy/card_01.png",
        },
        {
          "card_title": "Card 2",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 7,
          "row_end": 12,
          "card_image": "/img/legacy/card_02.png",
        },
      ],
    },
    {
      "column_position": 2,
      "cards": [
        {
          "card_title": "Card 3",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 1,
          "row_end": 12,
          "card_image": "/img/legacy/card_03.png",
        },
      ],
    },
  ],
  "project_links": [
    {
      "link_name": "Github Repo",
      "link_url": "https://github.com/MographlloCode/spacews",
    },
    {
      "link_name": "Live Demo",
      "link_url": "https://mographllocode.github.io/spacews/",
    },
  ]
  },
  // Byte Bank - ID 4
  {
    "project_id": 4,
    "project_title": "Byte Bank",
    "project_description": "Digital Baking Landing Page",
    "tech_stack": [
      {
        "label": "Python",
        "icon_name": "python"
      },
      {
        "label": "Django",
        "icon_name": "django"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "NextJS",
        "icon_name": "nextjs"
      },
      {
        "label": "ReactJS",
        "icon_name": "react"
      },
      {
        "label": "HTML 5",
        "icon_name": "html"
      },
      {
        "label": "CSS 3",
        "icon_name": "css"
      },
      {
        "label": "Tailwind",
        "icon_name": "tailwind"
      },
    ],
    "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "card_grid": [
      {
        "column_position": 1,
        "cards": [
          {
            "card_title": "Card 1",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 7,
            "card_image": "/img/byte_bank/card_01.png",
          },
          {
            "card_title": "Card 2",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 7,
            "row_end": 12,
            "card_image": "/img/byte_bank/card_02.png",
          },
        ],
      },
      {
        "column_position": 2,
        "cards": [
          {
            "card_title": "Card 3",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 12,
            "card_image": "/img/byte_bank/card_03.png",
          },
        ],
      },
    ],
    "project_links": [
      {
        "link_name": "Github Repo",
        "link_url": "https://github.com/MographlloCode/spacews",
      },
      {
        "link_name": "Live Demo",
        "link_url": "https://mographllocode.github.io/spacews/",
      },
    ]
  },
  // Wellness - ID 5
  {
    "project_id": 5,
    "project_title": "Wellness",
    "project_description": "Finance APP",
    "tech_stack": [
      {
        "label": "Python",
        "icon_name": "python"
      },
      {
        "label": "Django",
        "icon_name": "django"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "NextJS",
        "icon_name": "nextjs"
      },
      {
        "label": "ReactJS",
        "icon_name": "react"
      },
      {
        "label": "HTML 5",
        "icon_name": "html"
      },
      {
        "label": "CSS 3",
        "icon_name": "css"
      },
      {
        "label": "Tailwind",
        "icon_name": "tailwind"
      },
    ],
    "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "card_grid": [
      {
        "column_position": 1,
        "cards": [
          {
            "card_title": "Card 1",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 7,
            "card_image": "/img/wellness/card_01.png",
          },
          {
            "card_title": "Card 2",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 7,
            "row_end": 12,
            "card_image": "/img/wellness/card_02.png",
          },
        ],
      },
      {
        "column_position": 2,
        "cards": [
          {
            "card_title": "Card 3",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 12,
            "card_image": "/img/wellness/card_03.png",
          },
        ],
      },
    ],
    "project_links": [
      {
        "link_name": "Github Repo",
        "link_url": "https://github.com/MographlloCode/spacews",
      },
      {
        "link_name": "Live Demo",
        "link_url": "https://mographllocode.github.io/spacews/",
      },
    ]
  },
  // Goal - ID 6
  {
    "project_id": 6,
    "project_title": "Goal",
    "project_description": "Goal APP",
    "tech_stack": [
      {
        "label": "Python",
        "icon_name": "python"
      },
      {
        "label": "Django",
        "icon_name": "django"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "NextJS",
        "icon_name": "nextjs"
      },
      {
        "label": "ReactJS",
        "icon_name": "react"
      },
      {
        "label": "HTML 5",
        "icon_name": "html"
      },
      {
        "label": "CSS 3",
        "icon_name": "css"
      },
      {
        "label": "Tailwind",
        "icon_name": "tailwind"
      },
    ],
    "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "card_grid": [
      {
        "column_position": 1,
        "cards": [
          {
            "card_title": "Card 1",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 7,
            "card_image": "/img/goal/card_01.png",
          },
          {
            "card_title": "Card 2",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 7,
            "row_end": 12,
            "card_image": "/img/goal/card_02.png",
          },
        ],
      },
      {
        "column_position": 2,
        "cards": [
          {
            "card_title": "Card 3",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 12,
            "card_image": "/img/goal/card_03.png",
          },
        ],
      },
    ],
    "project_links": [
      {
        "link_name": "Github Repo",
        "link_url": "https://github.com/MographlloCode/spacews",
      },
      {
        "link_name": "Live Demo",
        "link_url": "https://mographllocode.github.io/spacews/",
      },
    ]
  },
  // Evo FITI - ID 7
  {
    "project_id": 7,
    "project_title": "Evo FITI",
    "project_description": "Evo FITI APP",
    "tech_stack": [
      {
        "label": "Python",
        "icon_name": "python"
      },
      {
        "label": "Django",
        "icon_name": "django"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "NextJS",
        "icon_name": "nextjs"
      },
      {
        "label": "ReactJS",
        "icon_name": "react"
      },
      {
        "label": "HTML 5",
        "icon_name": "html"
      },
      {
        "label": "CSS 3",
        "icon_name": "css"
      },
      {
        "label": "Tailwind",
        "icon_name": "tailwind"
      },
    ],
    "archtectural_decisions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "card_grid": [
      {
        "column_position": 1,
        "cards": [
          {
            "card_title": "Card 1",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 7,
            "card_image": "/img/evo_fiti/card_01.png",
          },
          {
            "card_title": "Card 2",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 7,
            "row_end": 12,
            "card_image": "/img/evo_fiti/card_02.png",
          },
        ],
      },
      {
        "column_position": 2,
        "cards": [
          {
            "card_title": "Card 3",
            "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "row_start": 1,
            "row_end": 12,
            "card_image": "/img/evo_fiti/card_03.png",
          },
        ],
      },
    ],
    "project_links": [
      {
        "link_name": "Github Repo",
        "link_url": "https://github.com/MographlloCode/spacews",
      },
      {
        "link_name": "Live Demo",
        "link_url": "https://mographllocode.github.io/spacews/",
      },
    ]
  },
]

export default function Home() {
  const { id } = useParams() // team === "nextjs"
  return (
    <section className='flex flex-col md:flex-row gap-8'>
      {projects.map((project, i) => {
        if(project.project_id == id ) {
          console.log(id)
          return (
            <>
              <section className='flex flex-col gap-8 xl:gap-16 max-w-[500px] min-w-[700px]'>
                <ProjectHeader project_infos={project}/>
                <TechStack project_infos={project} />
                <Archtect project_infos={project}/>
                <ProjectLinks project_infos={project}/>
              </section>
              <section className='flex gap-4 md:gap-8 w-full min-h-[400px]'>
                <ProjectCards project_infos={project} />
              </section>
            </>
          )
        }
        else {
          return null
        }
      })}
    </section>
  );
}
