'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}

import { useSearchParams } from 'next/navigation'
 
export default function SearchID() {
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
 
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return id
}