
import AwsIcon from '@public/icons/aws_icon.svg'
import BootstrapIcon from '@public/icons/bootstrap_icon.svg'
import Css3Icon from '@public/icons/css3_icon.svg'
import DjangoIcon from '@public/icons/django_icon.svg'
import DockerIcon from '@public/icons/docker_icon.svg'
import FlaskIcon from '@public/icons/flask_icon.svg'
import Html5Icon from '@public/icons/html5_icon.svg'
import JavascriptIcon from '@public/icons/javascript_icon.svg'
import KubernetesIcon from '@public/icons/kubernetes_icon.svg'
import NextJSIcon from '@public/icons/nextjs_icon.svg'
import NodeJSIcon from '@public/icons/nodejs_icon.svg'
import PythonIcon from '@public/icons/python_icon.svg'
import ReactIcon from '@public/icons/react_icon.svg'
import ReduxIcon from '@public/icons/redux_icon.svg'
import TailwindIcon from '@public/icons/tailwind_icon.svg'

import React from 'react'

const ProjectTechStack = ({mobile}) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      <AwsIcon className="w-8 xl:w-10"/>
      <PythonIcon className="w-8 xl:w-10"/>
      <DjangoIcon className="w-8 xl:w-10"/>
      <ReactIcon className="w-8 xl:w-10"/>
    </div>
  )
}

export default ProjectTechStack