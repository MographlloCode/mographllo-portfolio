import React from 'react'
import Icon from '../../Icon'

const TechStack = ({project_infos}) => {
  return (
    <section className='text-justify w-fit max-w-80 md:max-w-[36rem]'>
        <h1 className='harmond-semibold text-3xl lg:text-5xl text-[#00171F] dark:text-[#F4E285] w-fit'>Tech Stack</h1>
        <div className='flex flex-wrap gap-4 text-[#00171F] dark:text-[#F8F7FF]  md:px-8'>
        {project_infos.tech_stack.map((tech, i) => (
            <div key={i} className='flex justify-center'>
              <Icon icon_name={tech.icon_name} className='w-12 h-16'/>
            </div>
        ))}
        </div>
        <div className='w-full flex gap-2 items-center flex-wrap max-w-80 md:max-w-[36rem] justify-center md:justify-start'>
        <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>i.e.</span>
        {project_infos.tech_stack.map((tech) => (
            <>
              <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
              <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>{tech.label}</span>
            </>
        ))}
        </div>
    </section>
  )
}

export default TechStack