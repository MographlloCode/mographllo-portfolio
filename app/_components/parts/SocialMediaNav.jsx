import React from 'react'
import IconButton from '../IconButton'
import Link from 'next/link'

const SocialMediaNav = ({isHeader, isFooterLink}) => {
  return (
    <nav className={` ${isHeader ? 'absolute flex flex-col' : 'flex'} md:flex-row gap-4 xl:gap-8 p-8`}>
      {isFooterLink ? (
        <>
          <IconButton isLink icon_name='linkedin' target_url='https://www.linkedin.com/in/Mographllo' isBlank isSocialNav footerPart />
          <IconButton isLink icon_name='github' target_url='https://www.github.com/MographlloCode' isBlank isSocialNav footerPart/>
          <IconButton isLink icon_name='behance' target_url='https://behance.net/Mographllo' isBlank isSocialNav footerPart/>
          <IconButton isLink icon_name='tiktok' target_url='https://www.tiktok.com/@ogusmello' isBlank isSocialNav footerPart/>
          <IconButton isLink icon_name='mail' target_url='mailto:contact@gmello.tech' isBlank isSocialNav footerPart/>
        </>
      ) : (
        <>
          <IconButton isLink icon_name='linkedin' target_url='https://www.linkedin.com/in/Mographllo' isBlank isSocialNav />
          <IconButton isLink icon_name='github' target_url='https://www.github.com/MographlloCode' isBlank isSocialNav/>
          <IconButton isLink icon_name='behance' target_url='https://behance.net/Mographllo' isBlank isSocialNav />
          <IconButton isLink icon_name='tiktok' target_url='https://www.tiktok.com/@ogusmello' isBlank isSocialNav />
          <IconButton isLink icon_name='mail' target_url='mailto:contact@gmello.tech' isBlank isSocialNav/>
        </>
      )}
    </nav>
  )
}

export default SocialMediaNav