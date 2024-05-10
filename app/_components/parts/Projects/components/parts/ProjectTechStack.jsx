import { AwsIcon, DjangoIcon, PythonIcon, ReactIcon } from '@icons'

import React from 'react'
import Icon from '../../../../Icon'

const ProjectTechStack = ({techStack}) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {
        techStack.map((icon, i) => <Icon key={i} icon_name={icon} className="w-8 xl:w-8"/>)
      }
    </div>
  )
}

export default ProjectTechStack