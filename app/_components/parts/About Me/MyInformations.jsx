import React from 'react'
import TechStack from '../MyInfo/TechStack'
import PicBio from '../MyInfo/PicBio'

const MyInformations = () => {
  return (
    <section id='informations' className='flex flex-col gap-8 max-w-[550px]'>
      <header className='flex'>
        <h1 className='kenoky-light text-7xl text-[#00171F] dark:text-[#F4E285]'>About Me</h1>
      </header>
      <main className='flex flex-col gap-8'>
        <PicBio />
        <TechStack />
      </main>
    </section>
  )
}

export default MyInformations