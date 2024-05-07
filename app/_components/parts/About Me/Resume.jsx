import React from 'react'
import ResumeProject from './components/ResumeProject'
import WorkExperience from '../Resume/WorkExperience'
import Link from 'next/link'

const Resume = ({resume_data}) => {
  return (
    <section id='resume' className='flex flex-col w-full gap-16'>
        <main className='flex flex-col gap-16 overlay-x-hidden'>
            <header>
                <h1 className='harmond-semibold text-5xl text-[#00171F] dark:text-[#F4E285]'>Resume</h1>
            </header>
            <section className='flex flex-col gap-8'>
                <h1 className='montserrat font-semibold text-xl text-[#00171F] dark:text-[#F8F7FF]'>Work Experience</h1>
                <div className='flex flex-col gap-4 ps-4'>
                    <WorkExperience 
                        startYear={'2023'}
                        endYear={'2024'}
                        roleTitle={'Lead Full Stack Developer'}
                        company={'You Bilíngue'}
                        workType={'On Site'}
                        location={'Brazil'}
                    />
                    <WorkExperience 
                        startYear={'2021'}
                        endYear={'2022'}
                        roleTitle={'Help Desk Agent'}
                        company={'Atacadão S.A'}
                        workType={'On Site'}
                        location={'Brazil'}
                    />
                    <WorkExperience 
                        startYear={'2015'}
                        endYear={'2021'}
                        roleTitle={'Graphic Artist'}
                        company={'Freelancer'}
                        workType={'Remote'}
                        location={'Worldwide'}
                    />
                </div>
                </section>
                <section className='flex flex-col gap-8'>
                    <h1 className='montserrat font-semibold text-xl text-[#00171F] dark:text-[#F8F7FF]'>Educational Background</h1>
                    <div className='flex flex-col gap-4 ps-4'>
                        <WorkExperience 
                            startYear={'2021'}
                            endYear={'2023'}
                            roleTitle={'A.S. Systems Analysis and Development'}
                            company={'Faculdade de Informática e Administração Paulista'}
                            workType={'Graduated'}
                            location={'Brazil'}
                        />
                        <WorkExperience 
                            startYear={'2016'}
                            endYear={'2018'}
                            roleTitle={'Information Technology Technician'}
                            company={'Escola e Faculdade Fortec Fatef'}
                            workType={'Graduated'}
                            location={'Brazil'}
                        />
                    </div>
                </section>
                <section className='flex flex-col gap-8'>
                    <h1 className='montserrat font-semibold text-xl text-[#00171F] dark:text-[#F8F7FF]'>Projects</h1>
                    <div className='flex gap-4 overflow-y-auto max-w-[1200px] p-4'>
                        <ResumeProject
                            project_title='Real Trust'
                            project_description='Realtor Platform'
                            project_image='/img/real_trust/real_trust_header.png'
                        />
                        <ResumeProject
                            project_title='Cycle'
                            project_description='Eco-Frienldy APP'
                            project_image='/img/cycle/cycle_header.png'
                        />
                        <ResumeProject
                            project_title='Legacy eSports'
                            project_description='eSports Team Website'
                            project_image='/img/legacy/legacy_header.png'
                        />
                        <ResumeProject
                            project_title='Byte Bank'
                            project_description='Fictional Banking Landing PAge'
                            project_image='/img/byte_bank/byte_bank_header.png'
                        />
                        <ResumeProject
                            project_title='Wellness'
                            project_description='Finantial APP'
                            project_image='/img/wellness/wellness_header.png'
                        />
                        <ResumeProject
                            project_title='Goal'
                            project_description='Sports Analysis APP'
                            project_image='/img/goal/goal_header.png'
                        />
                        <ResumeProject
                            project_title='Evo FITI'
                            project_description='Training APP'
                            project_image='/img/evo_fiti/evo_fiti_header.png'
                        />
                    </div>
                </section>
                <section className='flex flex-col gap-4 w-fit'>
                <h1 className='montserrat font-semibold text-xl text-[#00171F] dark:text-[#F8F7FF]'>Let&apos;s Talk!</h1>
                <div className='flex gap-8 text-sm xl:text-xl text-[#00171F] dark:text-[#F8F7FF] montserrat px-4 max-w-[36rem] flex-wrap'>
                    <Link href={'https://www.linkedin.com/in/Mographllo'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>LinkedIn</span><span className='font-medium'>Mographllo</span></Link>
                    <Link href={'https://www.github.com/MographlloCode'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>Github</span><span className='font-medium'>MographlloCode</span></Link>
                    <Link href={'https://www.behance.net/Mographllo'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>Behance</span><span className='font-medium'>Mographllo</span></Link>
                    <Link href={'https://instagram.com/ogusmello'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>Instagram</span><span className='font-medium'>@ogusmello</span></Link>
                    <Link href={'https://www.tiktok.com/@ogusmello'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>TikTok</span><span className='font-medium'>@ogusmello</span></Link>
                    <Link href={'mailto:contact@gmello.tech'} target='_bank' className='flex flex-col'><span className='text-sm font-light'>Email</span><span className='font-medium'>contact@gmello.tech</span></Link>
                </div>
            </section>
        </main>
        <footer className='flex flex-col'>
            <p className='text-3xl text-[#00171F] dark:text-[#F8F7FF] harmond-semibold'>Created By</p>
            <h1 className='kenoky-light uppercase text-5xl xl:text-9xl dark:text-[#F4E285] text-[#00171F]'>Mographllo</h1>
        </footer>
    </section>
  )
}

export default Resume