import React from 'react'
import Icon from '../../../Icon'
import Image from 'next/image'

const ResumeProject = ({project_title, project_description, project_image}) => {
  return (
    <div className='flex relative flex-col gap-2 group'>
        <div className='z-0'>
            <h1 className='montserrat text-[#00171F] dark:text-[#F8F7FF] font-semibold'>{project_title}</h1>
        </div>
        <div className='relative border border-[#00171F] dark:border-[#F4E285]'>
          <div className='absolute inset-0 z-0'>
            <Image src={project_image} alt='tripo' layout='fill' objectFit='cover' className='h-fit w-fit' />
          </div>
          <div className='
              flex flex-col gap-2 items-center  justify-center p-4 border z-0
              border-[#00171F] dark:border-[#F4E285] w-64 h-32 group group-hover:bg-[#00171F] dark:group-hover:bg-[#F4E285]/80 
              group-hover:backdrop-blur-sm text-[#F4E285] dark:text-[#00171F] transition-all ease-in-out'>
              <div className='hidden group-hover:flex w-full justify-center items-center'>
                <Icon icon_name='aws' className='w-10' />
                <Icon icon_name='python' className='w-10' />
                <Icon icon_name='django' className='w-10' />
                <Icon icon_name='react' className='w-10' />
              </div>
              <p className='hidden group-hover:block montserrat text-sm font-semibold text-center'>{project_description}</p>
          </div>
        </div>
        
    </div>
  )
}

export default ResumeProject