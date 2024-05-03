import React from 'react'

const ProjectCardTitle = ({title, subtitle, mobile}) => {
  return (
    <div className='text-center'>
        <h1 className='kenoky-light font-semibold text-2xl'>{title}</h1>
        <p className={`montserrat font-lg ${mobile ? 'text-sm' : ''}`}>{subtitle}</p>
    </div>
  )
}

export default ProjectCardTitle