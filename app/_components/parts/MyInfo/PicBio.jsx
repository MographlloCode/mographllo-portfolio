import Image from 'next/image'
import React from 'react'

const about_me = {
    "image_url": "/profile_pic.jpeg",
    "image_alt": "This is an image of a young man with tan skin and dark brown curly hair. He is wearing large headphones and a black t-shirt, and is looking directly at the camera with a slight smile and a friendly expression. The background is indistinct, suggesting he is in an indoor environment.",
    "paragraphs": [
      "Hello, welcome!", 
      "I'm Gustavo Mello, also known as Mographllo, a software developer with extensive experience in both system development and audiovisual production.", 
      "I have led and developed projects using technologies such as Python, Django, and React JS. My work ranges from architecture to the implementation of tech solutions, always focusing on optimization and security.",
      "Moreover, I have a strong background in graphic design and media production, using tools from the Adobe Suite and Blender to create visual identities and interactive content that enhance digital engagement.",
      "I'm open to new opportunities, so if you have a spot for me in your next project, send me a message through one of the contact methods, and let's talk!"
    ],
    "note": "Many of the projects in my portfolio are inspired by games, especially VALORANT, because I've been passionate about games and e-sports since I was a kid. I dream of working on a project that combines this passion one day!"
  }

const PicBio = () => {
  return (
    <section className='flex flex-col gap-4' >
        <div className='p-6 border border-[#00171F] dark:border-[#F4E285] rounded-3xl max-w-[550px]'>
            <Image src={about_me.image_url} alt={about_me.image_alt} width={0} height={0} sizes="100vw" className="w-full h-auto border border-[#00171F] dark:border-[#F4E285] rounded-2xl"/>
        </div>
        <div className='montserrat text-[#00171F] dark:text-[#F8F7FF] text-lg max-w-[550px] text-justify flex flex-col gap-4'>
            {about_me.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            <p className='text-sm dark:text-gray-300 text-slate-950 italic flex gap-4 relative'>Note: {about_me.note}</p>
        </div>
    </section>
  )
}

export default PicBio