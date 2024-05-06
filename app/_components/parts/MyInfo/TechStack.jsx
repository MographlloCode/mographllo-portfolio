import React from 'react'
import Icon from '../../Icon'

const tech_stack = [
  {
    "label": "Python",
    "icon_name": "python"
  },
  {
    "label": "Django",
    "icon_name": "django"
  },
  {
    "label": "Flask",
    "icon_name": "flask"
  },
  {
    "label": "Kubernetes",
    "icon_name": "kubernetes"
  },
  {
    "label": "Docker",
    "icon_name": "docker"
  },
  {
    "label": "AWS",
    "icon_name": "aws"
  },
  {
    "label": "Javascript",
    "icon_name": "javascript"
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
    "label": "Redux",
    "icon_name": "redux"
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
  {
    "label": "Bootstrap",
    "icon_name": "bootstrap"
  },
]

const TechStack = () => {
  return (
    <section className='flex flex-col gap-2'>
        <h1 className='harmond-semibold text-6xl text-[#00171F] dark:text-[#F4E285]'>Tech Stack</h1>
        <div className='grid grid-cols-5 grid-rows-3 justify-center items-center text-[#00171F] dark:text-[#F8F7FF]'>
        {tech_stack.map((technology, i) => (
            <div key={i} className='flex justify-center'>
                <Icon icon_name={technology.icon_name} className='w-12 h-16'/>
            </div>
        ))}
        </div>
        <div className='w-full flex gap-2 justify-center items-center flex-wrap'>
        <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>i.e.</span>
        {tech_stack.map((technology) => (
            <>
            <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
            <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>{technology.label}</span>
            </>
        ))}
        </div>
    </section>
  )
}

export default TechStack