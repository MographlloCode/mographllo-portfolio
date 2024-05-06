
import Resume from './_components/parts/About Me/Resume'
import MyInformations from './_components/parts/About Me/MyInformations'
import Intro from './_components/sections/Intro'
import AboutMe from './_components/sections/AboutMe'
import Projects from './_components/sections/Projects';


export default function Home() {
  return (
    <>
      <Intro/>
      <Projects/>
      <AboutMe/>
    </>
  );
}
