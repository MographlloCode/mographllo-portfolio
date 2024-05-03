import React from 'react'
import SocialMediaNav from './SocialMediaNav'
import NavDivider from './parts/NavDivider'
import NavLink from './parts/NavLink'

const PageFooter = () => {
  return (
    <footer className='flex flex-col xl:flex-row items-center justify-between gap-8 p-8 xl:p-16 bg-[#000B0F]'>
        <div className='flex flex-col justify-center'>
            <h1 className='kenoky-light text-[#F4E285] text-2xl h-6'>Gustavo Mello</h1>
            <p className='kenoky-light text-[#F4E285] text-xl h-6'>Portfolio 2024</p>
        </div>
        <div className='flex flex-col xl:flex-row gap-4 xl:items-center'>
            <NavLink content='Go to Top' url='#introduction' isFooter/>
            <NavDivider />
            <NavLink content='Projects' url='#projects' isFooter/>
            <NavDivider />
            <NavLink content='About Me' url='#about_me' isFooter />
        </div>
        <SocialMediaNav isFooterLink/>
    </footer>
  )
}

export default PageFooter