import React from 'react'
import RollSection from '../RollSection'
import Icon from '../Icon'
import Link from 'next/link'


const Intro = () => {
  return (
    <section id='introduction' className='flex flex-col w-full justify-between gap-8 xl:gap-16 min-h-[540px]'>
        {/* Intro Header */}
        <header className='flex w-full justify-end'>
        <nav className='flex flex-col items-end xl:flex-row gap-1 xl:gap-16'>
            <Link className='harmond-semibold xl:text-5xl text-[#00171F] dark:text-[#F4E285] text-3xl cursor-pointer dark:hover:text-[#AEECEF] hover:text-[#004158] transition-all ease-in-out' href={'#projects'}>Projects</Link>
            <Link className='harmond-semibold xl:text-5xl text-[#00171F] dark:text-[#F4E285] text-3xl cursor-pointer dark:hover:text-[#AEECEF] hover:text-[#004158] transition-all ease-in-out' href={'#about_me'}>About Me</Link>
        </nav>
        </header>
        {/* Intro Main */}
        <main className='flex w-full h-64 xl:h-fit justify-center items-center gap-4 xl:gap-12'>
        <Icon icon_name='logo' className='w-[200px] text-[#00171F] dark:text-[#F4E285] md:max-w-[200px] lg:w-[400px] lg:max-w-[400px] xl:h-fit'/>
        <div className='flex flex-col top-2'>
            <div className='flex flex-col'>
            <h1 className='montserrat text-3xl md:text-5xl lg:text-8xl xl:text-[12rem] font-semibold xl:font-medium uppercase dark:text-[#F4E285] text-[#00171F] h-8 md:h-12 lg:h-24 xl:h-44'>Gustavo</h1>
            <div className='flex gap-16 items-center h-8 md:h-12 lg:h-24 xl:h-44'>
                <h1 className='montserrat text-3xl md:text-5xl lg:text-8xl xl:text-[12rem] font-semibold xl:font-medium uppercase dark:text-[#F4E285] text-[#00171F]'>Mello</h1>
                <div className='hidden xl:flex flex-col'>
                <h2 className='kenoky-light text-2xl lg:text-4xl xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Artist</h2>
                <h2 className='kenoky-light text-2xl lg:text-4xl xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Developer</h2>
                <h2 className='kenoky-light text-2xl lg:text-4xl xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Problem Solver</h2>
                </div>
            </div>
            </div>
            <div className='flex xl:hidden flex-col'>
            <h2 className='kenoky-light text-xl md:text-2xl lg:text-4xl  xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Artist</h2>
            <h2 className='kenoky-light text-xl md:text-2xl lg:text-4xl  xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Developer</h2>
            <h2 className='kenoky-light text-xl md:text-2xl lg:text-4xl  xl:text-5xl text-[#00171F] dark:text-[#F8F7FF]'>Problem Solver</h2>
            </div>
        </div>
        </main>
        {/* Intro Footer */}
        <RollSection sectionName={'Projects'} sectionUrl={'projects'}/>
    </section>
  )
}

export default Intro