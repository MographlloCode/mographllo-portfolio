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
import Image from 'next/image'
import React from 'react'

const MyInformations = () => {
  return (
    <section id='informations' className='flex flex-col gap-8 max-w-[550px]'>
            <header className='flex'>
              <h1 className='kenoky-light text-7xl text-[#00171F] dark:text-[#F4E285]'>About Me</h1>
            </header>
            <main className='flex flex-col gap-8'>
              {/* Pic & Bio */}
              <section className='flex flex-col gap-4' >
                <div className='p-6 border border-[#00171F] dark:border-[#F4E285] rounded-3xl max-w-[550px]'>
                    <Image src={'/profile_pic.jpeg'} alt='White Boy with Medium size dark hair' width={0} height={0} sizes="100vw" className="w-full h-auto border border-[#00171F] dark:border-[#F4E285] rounded-2xl"/>
                </div>
                <div className='montserrat text-[#00171F] dark:text-[#F8F7FF] text-lg max-w-[550px] text-justify flex flex-col gap-4'>
                  <p>Hello, welcome!</p>
                  <p>I'm Gustavo Mello, also known as Mographllo, a software developer with extensive experience in both system development and audiovisual production.</p>
                  <p>I have led and developed projects using technologies such as Python, Django, and React JS. My work ranges from architecture to the implementation of tech solutions, always focusing on optimization and security.</p>
                  <p>Moreover, I have a strong background in graphic design and media production, using tools from the Adobe Suite and Blender to create visual identities and interactive content that enhance digital engagement.</p>
                  <p>I'm open to new opportunities, so if you have a spot for me in your next project, send me a message through one of the contact methods, and let's talk!</p>
                  <p className='text-sm dark:text-gray-300 text-slate-950 italic flex gap-4 relative'>Note: Many of the projects in my portfolio are inspired by games, especially VALORANT, because I've been passionate about games and e-sports since I was a kid. I dream of working on a project that combines this passion one day!</p>
              </div>
              </section>
              {/* Tech Stack */}
              <section className='flex flex-col gap-2'>
                <h1 className='harmond-semibold text-6xl text-[#00171F] dark:text-[#F4E285]'>Tech Stack</h1>
                <div className='grid grid-cols-5 grid-rows-3 justify-center items-center text-[#00171F] dark:text-[#F8F7FF]'>
                  <div className='flex justify-center'>
                    <PythonIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <DjangoIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <FlaskIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <KubernetesIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <DockerIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <AwsIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <JavascriptIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <NodeJSIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <NextJSIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <ReactIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <ReduxIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <Html5Icon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <Css3Icon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <TailwindIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <BootstrapIcon className='w-12 h-16'/>
                  </div>
                </div>
                <div className='w-full flex gap-2 justify-center items-center flex-wrap'>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>i.e.</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Python</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Django</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Flask</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Kubernetes</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Docker</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Aws</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Javascript</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>NodeJs</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>NextJS</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>ReactJs</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Redux</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>HTML5</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>CSS3</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Tailwind</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Bootstrap</span>
                </div>
              </section>
            </main>
            
          </section>
  )
}

export default MyInformations