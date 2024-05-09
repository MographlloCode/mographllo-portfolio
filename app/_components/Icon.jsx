import React from 'react'
import { AwsIcon, BootstrapIcon, Css3Icon, DjangoIcon, DockerIcon, FlaskIcon, GMelloIcon, Html5Icon, JavascriptIcon, KubernetesIcon, NextJSIcon, NodeJSIcon, PythonIcon, ReactIcon, ReduxIcon, TailwindIcon } from '@icons'

const renderIcon = (icon, className) => {
    switch(icon){
        case 'logo':
            return <GMelloIcon className={className} />
        case 'aws':
            return <AwsIcon className={className} />
        case 'bootstrap':
            return <BootstrapIcon className={className} />
        case 'css':
            return <Css3Icon className={className} />
        case 'django':
            return <DjangoIcon className={className} />
        case 'docker':
            return <DockerIcon className={className} />
        case 'flask':
            return <FlaskIcon className={className} />
        case 'html':
            return <Html5Icon className={className} />
        case 'javascript':
            return <JavascriptIcon className={className} />
        case 'kubernetes':
            return <KubernetesIcon className={className} />
        case 'nextjs':
            return <NextJSIcon className={className} />
        case 'nodejs':
            return <NodeJSIcon className={className} />
        case 'python':
            return <PythonIcon className={className} />
        case 'react':
            return <ReactIcon className={className} />
        case 'redux':
            return <ReduxIcon className={className} />
        case 'tailwind':
            return <TailwindIcon className={className} />
        case 'instagram':
            return <i className={`bx bxl-instagram ${className}`}></i>
        case 'github':
            return <i className={`bx bxl-github ${className}`}></i>
        case 'facebook':
            return <i className={`bx bxl-facebook ${className}`}></i>
        case 'tiktok':
            return <i className={`bx bxl-tiktok ${className}`}></i>
        case 'twitter':
            return <i className={`bx bxl-twitter ${className}`}></i>
        case 'linkedin':
            return <i className={`bx bxl-linkedin ${className}`}></i>
        case 'tiktok':
            return <i className={`bx bxl-tiktok ${className}`}></i>
        case 'behance':
            return <i className={`bx bxl-behance ${className}`}></i>
        case 'figma':
            return <i className={`bx bxl-figma bx-md ${className}`}></i>
        case 'mail':
            return <i className={`bx bxs-envelop ${className}`}></i>
        case 'sun':
                return <i className={`bx bxs-sun bx-sm  text-[#F4E285] w-6 h-6 ${className}`}></i>
        case 'moon':
            return <i className={`bx bxs-moon bx-sm dark:text-[#00171F] text-[#00171F] w-6 h-6 ${className}`}></i>
        case 'right_arrow':
            return <i className={`bx bxs-right-arrow-alt ${className}`}></i>
        case 'left_arrow':
            return <i className={`bx bxs-right-arrow-alt ${className}`}></i>
        default:
            return null
    }
}

const Icon = ({icon_name, className}) => {
  return (
    renderIcon(icon_name, className)
  )
}

export default Icon