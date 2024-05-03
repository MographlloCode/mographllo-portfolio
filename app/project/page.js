
import PageHeader from '@components/PageHeader'
import PageFooter from '@components/PageFooter'
import DjangoIcon from '@public/icons/django_icon.svg'
import DockerIcon from '@public/icons/docker_icon.svg'
import FlaskIcon from '@public/icons/flask_icon.svg'
import KubernetesIcon from '@public/icons/kubernetes_icon.svg'
import PythonIcon from '@public/icons/python_icon.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <PageHeader />
      <main className='flex flex-col lg:flex-row w-screen px-8 pt-32 pb-16 xl:py-32 xl:p-24 gap-8 xl:gap-16 overflow-x-hidden'>
        <section className='flex flex-col gap-8 xl:gap-16 max-w-[500px] min-w-[700px]'>
            <nav className='flex max-w-80 md:max-w-[36rem] justify-end md:justify-start'>
                <Link href='/' className='kenoky-light text-xl md:text-2xl text-[#00171F] dark:text-[#F4E285]'>
                    <button className='flex items-center gap-1'>
                        <i class='bx bx-left-arrow-alt h-5'></i>
                        <span>Back to Home</span>
                    </button>
                </Link>
            </nav>
            <section className='flex flex-col gap-4 w-fit text-justify max-w-80 md:max-w-[36rem] text-end md:text-start'>
                <h1 className='kenoky-light text-3xl md:text-text-5xl lg:text-7xl xl:text-9xl uppercase text-[#00171F] dark:text-[#F4E285] '>Project 1</h1>
                <p className='montserrat text-sm md:text-text-md lg:text-xl xl:text-2xl dark:text-[#F8F7FF] text-[#00171F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <section className='text-justify w-fit max-w-80 md:max-w-[36rem]'>
                <h1 className='harmond-semibold text-3xl lg:text-5xl text-[#00171F] dark:text-[#F4E285] w-fit'>Tech Stack</h1>
                <div className='flex gap-4 text-[#00171F] dark:text-[#F8F7FF]  md:px-8'>
                  <div className='flex justify-center'>
                    <PythonIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <DjangoIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <FlaskIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <KubernetesIcon className='w-12 h-16'/>
                  </div>
                  <div className='flex justify-center'>
                    <DockerIcon className='w-12 h-16'/>
                  </div>
                </div>
                <div className='w-full flex gap-2 items-center flex-wrap max-w-80 md:max-w-[36rem] justify-center md:justify-start'>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>i.e.</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Python</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Django</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Flask</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Kubernetes</span>
                  <div className='w-1 h-1 bg-[#00171F] dark:bg-[#F8F7FF] rounded-full'></div>
                  <span className='montserrat text-[#00171F] dark:text-[#F8F7FF]'>Docker</span>
                </div>
            </section>
            <section className='text-justify w-fit max-w-80 md:max-w-[36rem]'>
                <h1 className='harmond-semibold text-3xl lg:text-5xl text-[#00171F] dark:text-[#F4E285] w-fit'>Archtectural Decisions</h1>
                <p className='montserrat text-sm md:text-text-md lg:text-xl xl:text-2xl max-w-[36rem] dark:text-[#F8F7FF] text-[#00171F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </section>
            <nav>
                <ul>
                    <li className='flex items-center'>
                        <Link href={'#'} className='montserrat text-xl md:text-2xl text-[#00171F] dark:text-[#F4E285] hover:text-[#004158] dark:hover:text-[#AEECEF] font-semibold'>
                            <span>GitHub Repo</span>
                            <i class='bx bx-right-arrow-alt h-5'></i>
                        </Link>
                    </li>
                    <li className='flex items-center'>
                        <Link href={'#'} className='montserrat text-xl md:text-2xl text-[#00171F] dark:text-[#F4E285] hover:text-[#004158] dark:hover:text-[#AEECEF] font-semibold'>
                            <span>Live Project</span>
                            <i class='bx bx-right-arrow-alt h-5'></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
        <section className='flex gap-4 md:gap-8 w-full min-h-[400px]'>
            <div className='grid grid-cols-3 grid-rows-12 w-full gap-4 md:gap-8'>
                <div className='col-start-1 col-end-4 row-start-1 row-end-7 border border-[#00171F] dark:border-[#F4E285] hover:bg-[#00171F]/90 dark:hover:bg-[#F4E285]/90 hover:backdrop-blur-sm transition-all ease-in-out group'>
                    <div className='hidden group-hover:flex flex-col p-4 gap-2 md:gap-4 transition-all ease-in-out'>
                        <h1 className='kenoky-light text-2xl md:text-3xl text-[#F4E285] dark:text-[#00171F]'>Part Title</h1>
                        <p className='montserrat text-xs md:text-lg max-w-[36rem] dark:text-[#00171F] text-[#F4E285] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='col-start-1 col-end-4 row-start-7 row-end-13 border border-[#00171F] dark:border-[#F4E285] hover:bg-[#00171F]/90 dark:hover:bg-[#F4E285]/90 hover:backdrop-blur-sm transition-all ease-in-out group'>
                    <div className='hidden group-hover:flex flex-col p-4 gap-2 md:gap-4 transition-all ease-in-out'>
                        <h1 className='kenoky-light text-2xl md:text-3xl text-[#F4E285] dark:text-[#00171F]'>Part Title</h1>
                        <p className='montserrat text-xs md:text-lg max-w-[36rem] dark:text-[#00171F] text-[#F4E285] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-12 w-full gap-4 gap-2 md:gap-4 md:gap-8'>
                <div className='col-start-1 col-end-4 row-start-1 row-end-13 border border-[#00171F] dark:border-[#F4E285] hover:bg-[#00171F]/90 dark:hover:bg-[#F4E285]/90 hover:backdrop-blur-sm transition-all ease-in-out group'>
                    <div className='hidden group-hover:flex flex-col p-4 transition-all ease-in-out'>
                        <h1 className='kenoky-light text-2xl md:text-3xl text-[#F4E285] dark:text-[#00171F]'>Part Title</h1>
                        <p className='montserrat text-xs md:text-lg max-w-[36rem] dark:text-[#00171F] text-[#F4E285] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
