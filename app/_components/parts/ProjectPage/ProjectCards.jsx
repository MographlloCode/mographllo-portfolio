import Image from 'next/image'
import React from 'react'

const ProjectCards = ({project_infos}) => {
  return (
    project_infos.card_grid.map((column, i) => (
        <div key={i} className='grid grid-cols-3 grid-rows-12 w-full gap-4 md:gap-8'>
          {column.cards.map((card, i) => (
            <div key={i} className={`col-start-1 col-end-4 row-start-${card.row_start} relative row-end-${card.row_end} border border-[#00171F] dark:border-[#F4E285] transition-all ease-in-out group`}>
              <div className='absolute inset-0 z-0'>
                <Image src={card.card_image} alt='tripo' layout='fill' objectFit='cover' />
              </div>
              <div className='hidden absolute z-10 h-full hover:bg-[#00171F]/90 dark:hover:bg-[#F4E285]/90 hover:backdrop-blur-sm group-hover:flex flex-col p-4 gap-2 md:gap-4 transition-all ease-in-out'>
                  <h1 className='kenoky-light text-2xl md:text-3xl text-[#F4E285] dark:text-[#00171F]'>{card.card_title}</h1>
                  <p className='montserrat text-xs md:text-lg max-w-[36rem] dark:text-[#00171F] text-[#F4E285] font-medium'>{card.card_description}</p>
              </div>
            </div>
          ))}
      </div>
      ))
  )
}

export default ProjectCards