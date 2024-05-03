
import PageHeader from '@components/PageHeader'
import PageFooter from '@components/PageFooter'
import Resume from './_components/Resume'
import Projects from './_components/Projects'
import MyInformations from './_components/MyInformations'
import RollSection from './_components/RollSection'
import LandingSection from './_components/LandingSection'


export default function Home() {
  return (
    <>
      <PageHeader />
      <main className='flex flex-col w-screen px-8 pt-32 pb-16 xl:py-32 xl:p-24 gap-4 xl:gap-16 overflow-x-hidden'>
        <LandingSection />
        <Projects />
        <section id='about_me' className='flex flex-col items-center xl:items-start xl:flex-row gap-8 xl:gap-16 w-full'>
          <MyInformations />
          <Resume />
        </section>
      </main>
      <PageFooter />
    </>
  );
}
