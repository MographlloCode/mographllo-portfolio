import Link from 'next/link'
import React from 'react'

const ProjectLinks = ({project_infos}) => {
  return (
    <nav>
        <ul>
        {project_infos.project_links.map((link, i) => (
            <li key={i} className='flex items-center'>
            <Link target='_blank' href={link.link_url} className='montserrat text-xl md:text-2xl text-[#00171F] dark:text-[#F4E285] hover:text-[#004158] dark:hover:text-[#AEECEF] font-semibold'>
                <span>{link.link_name}</span>
                <i class='bx bx-right-arrow-alt h-5'></i>
            </Link>
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default ProjectLinks