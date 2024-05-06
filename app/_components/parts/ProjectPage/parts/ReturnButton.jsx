import Link from 'next/link'
import React from 'react'

const ReturnButton = () => {
  return (
    <Link href='/' className='kenoky-light font-semibold text-lg md:text-xl text-[#00171F] dark:text-[#F4E285]'>
        <button className='flex items-center gap-1'>
            <i class='bx bx-left-arrow-alt h-5'></i>
            <span>Back to Home</span>
        </button>
    </Link>
  )
}

export default ReturnButton