'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {

  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  return (
    <section className="flex absolute -top-1 right-8 w-[84px]">
        <div className="flex flex-col items-center gap-1 absolute hover:top-0 dark:hover:top-0 transition-all ease-in-out -top-2 dark:-top-8 left-0">
          <span className="w-[6px] h-20 bg-[#00171F] dark:bg-[#F4E285] block rounded-full"></span>
          <button onClick={() => setTheme('light')} id="theme-toggle" className="border-[3px] border-[#00171F] dark:border-[#F4E285] bg-[#00171F] dark:bg-transparent p-1 flex justify-center items-center rounded-full min-w-8 min-h-8">
              <i className='bx bxs-sun bx-sm text-[#F4E285] w-6 h-6'></i>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 absolute -top-8 dark:-top-2 hover:top-0  dark:hover:top-0 transition-all ease-in-out right-0">
          <span className="w-[6px] h-20 bg-[#00171F] dark:bg-[#F4E285] block rounded-full"></span>
          <button onClick={() => setTheme('dark')} id="theme-toggle" className="border-[3px] border-[#00171F] dark:border-[#F4E285] dark:bg-[#F4E285] p-1 flex justify-center items-center rounded-full min-w-8 min-h-8">
              <i className='bx bxs-moon bx-sm dark:text-[#00171F] text-[#00171F] w-6 h-6'></i>
          </button>
        </div>
    </section>
  )
}

export default ThemeSwitcher