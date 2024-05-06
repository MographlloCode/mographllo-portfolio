import React from 'react'

const Archtect = ({project_infos}) => {
  return (
    project_infos.archtectural_decisions ? <section className='text-justify w-fit max-w-80 md:max-w-[36rem]'>
        <h1 className='harmond-semibold text-3xl lg:text-5xl text-[#00171F] dark:text-[#F4E285] w-fit'>Archtectural Decisions</h1>
        <p className='montserrat text-sm md:text-text-md lg:text-xl xl:text-2xl max-w-[36rem] dark:text-[#F8F7FF] text-[#00171F]'>{project_infos.archtectural_decisions}</p>
    </section> : ''
  )
}

export default Archtect