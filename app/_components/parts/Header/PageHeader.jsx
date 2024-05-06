import React from 'react'
import SocialMediaNav from '../SocialMediaNav'
import ThemeSwitcher from './components/ThemeSwitcher'

const PageHeader = () => {
  return (
    <header className="flex w-full">
        <SocialMediaNav isHeader />
        <ThemeSwitcher />
    </header>
  )
}

export default PageHeader