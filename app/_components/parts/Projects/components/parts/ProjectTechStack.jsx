import { AwsIcon, DjangoIcon, PythonIcon, ReactIcon } from '@icons'

import React from 'react'
import Icon from '../../../../Icon'

const ProjectTechStack = () => {
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      <Icon icon_name='aws' className="w-8 xl:w-10"/>
      <Icon icon_name='python' className="w-8 xl:w-10"/>
      <Icon icon_name='django' className="w-8 xl:w-10"/>
      <Icon icon_name='react' className="w-8 xl:w-10"/>
    </div>
  )
}

export default ProjectTechStack