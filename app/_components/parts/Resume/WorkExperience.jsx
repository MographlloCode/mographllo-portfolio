import React from 'react'

const WorkExperience = ({startYear, endYear, roleTitle, company, workType, location}) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>
            <p className='text-[#00171F] dark:text-[#F8F7FF] min-w-24 text-sm'>{startYear} - {endYear}</p>
            <p className='font-semibold text-lg text-[#00171F] dark:text-[#F8F7FF]'>{roleTitle}</p>
            <p>{company} - {workType} - {location}</p>
        </div>
    </div>
  )
}

export default WorkExperience