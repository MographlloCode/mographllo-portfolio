import React from 'react'
import IconLink from './parts/IconLink'
import Link from 'next/link'

const SocialMediaNav = ({isHeader, isFooterLink}) => {
  return (
    <nav className={` ${isHeader ? 'absolute flex flex-col' : 'flex'} md:flex-row gap-4 xl:gap-8 p-8`}>
        {/* <IconLink icon='linkedin'/> */}
        <Link href={'https://www.linkedin.com/in/Mographllo'} target='_blank'>
          <i className={`bx bxl-linkedin ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
        <Link href={'https://www.github.com/MographlloCode'} target='_blank'>
          <i className={`bx bxl-github ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
        <Link href={'https://behance.net/Mographllo'} target='_blank'>
          <i className={`bx bxl-behance ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
        <Link href={'https://instagram.com/ogusmello'} target='_blank'>
          <i className={`bx bxl-instagram-alt ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
        <Link href={'https://www.tiktok.com/@ogusmello'} target='_blank'>
          <i className={`bx bxl-tiktok ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
        <Link href={'mailto:contact@gmello.tech'} target='_blank'>
          <i className={`bx bxs-envelope ${isFooterLink ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}></i>
        </Link>
    </nav>
  )
}

export default SocialMediaNav