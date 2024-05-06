import Link from 'next/link'
import React from 'react'
import Icon from './Icon'

const IconButton = ({id, isLink, onClick, icon_name, target_url, isBlank, isSocialNav, isThemeSwitcher, footerPart, btnClass, iconClasses}) => {
  return (
    isLink ? (
      <Link href={target_url} target={ isBlank ? '_blank' : ''}>
        <button className={btnClass}>
          {footerPart ? (
            <Icon icon_name={icon_name} className={`text-[#F4E285] dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}/>
          ) : isSocialNav ? (
            <Icon icon_name={icon_name} className={`text-[#00171F] dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}/>
          ) : isThemeSwitcher ? (
            <Icon icon_name={icon_name} className={`border-[3px] border-[#00171F] dark:border-[#F4E285] bg-[#00171F] dark:bg-transparent p-1 flex justify-center items-center rounded-full min-w-8 min-h-8`}/>
          ) : (
            <Icon icon_name={icon_name} className={className}/>
          )}
        </button>
      </Link>
    ) : (
      <button 
        id='' 
        onClick={onClick} 
        className={btnClass}
      >
          {footerPart ? (
            <Icon icon_name={icon_name} className={`text-[#F4E285] dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}/>
          ) : isSocialNav ? (
            <Icon icon_name={icon_name} className={`text-[#00171F] dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] cursor-pointer transition-all ease-in-out text-lg xl:text-2x`}/>
          ) : isThemeSwitcher ? (
            <Icon icon_name={icon_name} className={iconClasses}/>
          ) : (
            <Icon icon_name={icon_name} className={iconClasses}/>
          )}
        </button>
    )
  )
}

export default IconButton