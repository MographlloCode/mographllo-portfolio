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
    "project_description": "Real Trust’s landing page offers an intuitive gateway to a cutting-edge real estate platform. Designed with user experience in mind, it features a clean layout and interactive elements to smoothly engage both realtors and clients, facilitating a seamless property discovery and transaction process.",
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
    "archtectural_decisions": null,
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
  "project_description": "Cycle is an app that motivates sustainable behavior by rewarding users for recycling. It features a user-friendly interface designed to make the recycling process both easy and rewarding. By integrating eco-friendly practices with technology, Cycle encourages users to contribute to environmental sustainability while earning rewards.",
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
  "archtectural_decisions": null,
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
  "project_description": "Legacy eSports provides a vibrant platform for gamers and fans to connect and compete. The design emphasizes a high-energy, visually engaging user interface that captures the spirit of competitive gaming. With features tailored to enhance user interaction and participation, Legacy eSports fosters a community where eSports enthusiasts can thrive.",
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
  "archtectural_decisions": null,
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
    "project_description": "Byte Bank's landing page serves as the front door to a digital banking experience designed for ease and efficiency. The interface is sleek and modern, emphasizing user-friendly navigation and secure, straightforward banking operations. Ideal for tech-savvy users, Byte Bank integrates cutting-edge technology to provide a seamless and engaging financial service.",
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
    "archtectural_decisions": null,
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
    // "project_links": [
    //   {
    //     "link_name": "Github Repo",
    //     "link_url": "https://github.com/MographlloCode/spacews",
    //   },
    //   {
    //     "link_name": "Live Demo",
    //     "link_url": "https://mographllocode.github.io/spacews/",
    //   },
    // ]
  },
  // Wellness - ID 5
  {
    "project_id": 5,
    "project_title": "Wellness",
    "project_description": "Wellness is designed to empower users with tools to manage their finances effectively. The app's user interface is clean and accessible, promoting easy navigation and a stress-free financial management experience. It combines practical budgeting tools with personalized financial insights to help users achieve their financial goals and maintain financial health.",
    "tech_stack": [
      {
        "label": "Javascript",
        "icon_name": "javascript"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "React Native",
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
    "archtectural_decisions": null,
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
    // "project_links": [
    //   {
    //     "link_name": "Github Repo",
    //     "link_url": "https://github.com/MographlloCode/spacews",
    //   },
    //   {
    //     "link_name": "Live Demo",
    //     "link_url": "https://mographllocode.github.io/spacews/",
    //   },
    // ]
  },
  // Goal - ID 6
  {
    "project_id": 6,
    "project_title": "Goal",
    "project_description": "Goal is a specialized social media platform designed to connect athletes with clubs and scouts. The interface is tailored to showcase athletes' profiles, achievements, and highlight reels, facilitating direct engagement with potential recruiters. By fostering a network of professionals, Goal aims to provide athletes with the visibility and opportunities needed to advance their careers.",
    "tech_stack": [
      {
        "label": "Javascript",
        "icon_name": "javascript"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "React Native",
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
    "archtectural_decisions": null,
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
    // "project_links": [
    //   {
    //     "link_name": "Github Repo",
    //     "link_url": "https://github.com/MographlloCode/spacews",
    //   },
    //   {
    //     "link_name": "Live Demo",
    //     "link_url": "https://mographllocode.github.io/spacews/",
    //   },
    // ]
  },
  // Evo FITI - ID 7
  {
    "project_id": 7,
    "project_title": "Evo FITI",
    "project_description": "Evo FITI is a social media app tailored for the fitness community. It provides a dynamic platform where users can share their fitness journeys, connect with trainers, and engage with fitness enthusiasts. The app’s design is sleek and motivating, equipped with features like workout tracking, community challenges, and personalized fitness advice to enhance the user experience and promote a healthy lifestyle.",
    "tech_stack": [
      {
        "label": "Javascript",
        "icon_name": "javascript"
      },
      {
        "label": "NodeJS",
        "icon_name": "nodejs"
      },
      {
        "label": "React Native",
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
    "archtectural_decisions": null,
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
    // "project_links": [
    //   {
    //     "link_name": "Github Repo",
    //     "link_url": "https://github.com/MographlloCode/spacews",
    //   },
    //   {
    //     "link_name": "Live Demo",
    //     "link_url": "https://mographllocode.github.io/spacews/",
    //   },
    // ]
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
                {/* <ProjectLinks project_infos={project}/> */}
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
