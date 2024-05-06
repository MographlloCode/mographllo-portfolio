import ProjectHeader from '../../_components/parts/ProjectPage/ProjectHeader'
import TechStack from '../../_components/parts/ProjectPage/TechStack'
import Archtect from '../../_components/parts/ProjectPage/Archtect'
import ProjectLinks from '../../_components/parts/ProjectPage/ProjectLinks'
import ProjectCards from '../../_components/parts/ProjectPage/ProjectCards'

const project_infos = {
  "project_title": "Project 1",
  "project_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          "card_image": "/img/tripio.png",
        },
        {
          "card_title": "Card 2",
          "card_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "row_start": 7,
          "row_end": 13,
          "card_image": "/img/tripio.png",
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
          "row_end": 13,
          "card_image": "/img/tripio.png",
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
}

export default function Home() {
  return (
    <section className='flex flex-col md:flex-row gap-8'>
      <section className='flex flex-col gap-8 xl:gap-16 max-w-[500px] min-w-[700px]'>
          <ProjectHeader project_infos={project_infos}/>
          <TechStack project_infos={project_infos} />
          <Archtect project_infos={project_infos}/>
          <ProjectLinks project_infos={project_infos}/>
      </section>
      <section className='flex gap-4 md:gap-8 w-full min-h-[400px]'>
        <ProjectCards project_infos={project_infos} />
      </section>
    </section>
  );
}
