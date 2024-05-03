import Link from 'next/link'
import React from 'react'

const RollSection = ({sectionName, sectionUrl}) => {
  return (
    <footer className='flex p-4 items-center justify-center'>
      <Link href={`#${sectionUrl}`} className='flex gap-2 items-center text-center'>
        <p className='kenoky-light text-[#00171F] dark:text-[#F8F7FF] text-lg xl:text-xl'>Roll to check</p>
        <button className="relative w-3 h-5 xl:w-6 xl:h-10 border border-[#00171F] dark:border-[#F8F7FF] rounded-full group p-1 cursor-pointer">
          <div className="rounded-full w-2 h-2 xl:w-4 xl:h-4 border border-[#00171F] dark:border-[#F8F7FF] absolute left-[1px] xl:left-[3px] top-[1px] xl:top-[5px] transition-all duration-500 ease-in-out xl:group-hover:h-4 xl:group-hover:top-[calc(100%-1.25rem)] group-hover:top-[calc(100%-10px)] group-hover:bg-[#00171F] dark:group-hover:bg-[#F8F7FF]"></div>
        </button>
        <p className='kenoky-light text-[#00171F] dark:text-[#F8F7FF] text-lg xl:text-xl'>the {sectionName}</p>
      </Link>
    </footer>
  )
}

export default RollSection