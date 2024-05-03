import Link from 'next/link'
import React from 'react'

const NavLink = ({content, url, size, className, isFooter}) => {
  return (
    <Link href={url} className={`harmond-semibold ${className} ${size == 'big' ? 'text-2xl xl:text-4xl' : 'text-2xl' } ${isFooter ? 'text-[#F4E285]' : 'text-[#00171F]'} dark:text-[#F8F7FF] hover:text-[#004158] dark:hover:text-[#AEECEF] transition-all ease-in-out delay-75 cursor-pointer`}>{content}</Link>
  )
}

export default NavLink