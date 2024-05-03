import React from 'react'
import ProjectGrid from './parts/ProjectGrid'
import RollSection from './RollSection'
import NavLink from './parts/NavLink'
import NavDivider from './parts/NavDivider'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col gap-4 xl:gap-8 min-h-[540px] justify-between' >
      <header className='flex flex-col relative w-full items-end xl:p-8 gap-2'>
        <div className='w-36 xl:w-72 h-36 xl:h-72 bg-[#00171F] dark:bg-[#F4E285] rounded-full absolute -top-12 xl:-top-36 -right-28 xl:right-0 overflow-hidden'>
          <span className='absolute text-5xl xl:text-9xl text-[#F4E285] dark:text-[#00171F] dark:text-[#00171F] kenoky-light uppercase left-[-11rem] xl:left-[-19.09rem] bottom-[3rem] xl:bottom-[-1rem]'>Projects</span>
        </div>
        <div className='flex justify-end'>
          <h1 className='text-5xl xl:text-9xl dark:text-[#F4E285] text-[#00171F] kenoky-light uppercase'>Projects</h1>
        </div>
        <nav className='flex w-full xl:w-fit xl:flex-row gap-4 items-center'>
          <NavLink content={'back-end'} url={'#'} size={'big'} className='underline-offset-0 hover:underline-offset-4 hover:underline'/>
          <NavDivider />
          <NavLink content={'front-end'} url={'#'} size={'big'} className='underline-offset-0 hover:underline-offset-4 hover:underline'/>
          <NavDivider />
          <NavLink content={'full stack'} url={'#'} size={'big'} className='underline-offset-0 hover:underline-offset-4 hover:underline'/>
        </nav>
      </header>
      <ProjectGrid projects_data={''}/>
      <RollSection sectionName={'About Me'} sectionUrl={'about_me'}/>
    </section>
  )
}

export default Projects