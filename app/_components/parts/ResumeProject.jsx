import React from 'react'
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

const ResumeProject = ({project_title, project_description}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div>
            <h1 className='montserrat text-[#00171F] dark:text-[#F8F7FF] font-semibold'>{project_title}</h1>
        </div>
        <div className='
            flex flex-col gap-2 items-center  justify-center p-4 border 
            border-[#00171F] dark:border-[#F4E285] w-64 h-32 group hover:bg-[#00171F] dark:hover:bg-[#F4E285]/80 
            hover:backdrop-blur-sm text-[#F4E285] dark:text-[#00171F] transition-all ease-in-out'>
            <div className='hidden group-hover:flex w-full justify-center items-center'>
                <AwsIcon className='w-10'/>
                <PythonIcon className='w-10'/>
                <DjangoIcon className='w-10'/>
                <ReactIcon className='w-10'/>
            </div>
            <p className='hidden group-hover:block montserrat text-sm font-semibold text-center'>{project_description}</p>
        </div>
    </div>
  )
}

export default ResumeProject