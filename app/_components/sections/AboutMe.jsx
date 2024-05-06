import React from 'react'
import MyInformations from '../parts/About Me/MyInformations'
import Resume from '../parts/About Me/Resume'

const AboutMe = () => {
  return (
    <section id='about_me' className='flex flex-col items-center xl:items-start xl:flex-row gap-8 xl:gap-16 w-full'>
        <MyInformations />
        <Resume />
      </section>
  )
}

export default AboutMe