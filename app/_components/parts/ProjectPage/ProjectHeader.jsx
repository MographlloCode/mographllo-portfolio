import React from 'react'
import ReturnButton from './parts/ReturnButton'

const ProjectHeader = ({project_infos}) => {
  return (
    <header>
        <nav className='flex max-w-80 md:max-w-[36rem] justify-end md:justify-start'>
            <ReturnButton/>
        </nav>
        <section className='flex flex-col gap-4 w-full text-end max-w-80 md:max-w-[36rem] md:text-justify'>
            <h1 className='kenoky-light text-3xl md:text-text-5xl lg:text-7xl xl:text-9xl uppercase text-[#00171F] dark:text-[#F4E285] '>{project_infos.project_title}</h1>
            <p className='montserrat text-sm md:text-text-md lg:text-xl xl:text-2xl dark:text-[#F8F7FF] text-[#00171F]'>{project_infos.project_description}</p>
        </section>
    </header>
  )
}

export default ProjectHeader