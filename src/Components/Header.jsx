import React, { useState } from 'react'


export default function Header() {
                
  const [open, setOpen] = useState(false)
  const scrollToAbout = () => {
    const AboutSection = document.getElementById('About');
    if (AboutSection) {
      AboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
const scrollToSkills = () => {
  const SkillsSection = document.getElementById('Skills');
    if (SkillsSection) {
        SkillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
    const scrollToProject = () => {
    const ProjectSection = document.getElementById('Project');
    if (ProjectSection) {
      ProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrolltoContact = () => {
    const ContactSection = document.getElementById('Contact');
    if (ContactSection) {
      ContactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
        <header className="w-full shadow-lg sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className='text-xl text-[#4A90E2] font-bold'>David Maher</p>
        </div>
        <nav>
          <ul className="hidden md:flex items-center gap-6 text-white font-medium">
              <a  onClick={()=>scrollToAbout('About')} href="/AboutMe" 
             
              id='about'
              className="hover:text-indigo-600  
              transition-all duration-300 ease-in-out  
              hover:-translate-y-0.5 hover:no-underline text-[17px] font-bold">About</a>


        <a  onClick={()=>scrollToSkills('Skills')}
         className="hover:text-indigo-600  cursor-pointer
            transition-all 
            duration-300 
            ease-in-out 
            hover:-translate-y-0.5 text-[17px] font-bold">Skills</a>


        <a  onClick={()=>scrollToProject('Project')} className="hover:text-indigo-600 cursor-pointer 
  transition-all 
  duration-300 
  ease-in-out 
  hover:-translate-y-0.5 none no- text-[17px] font-bold">Projects</a>



        <a onClick={()=>scrolltoContact('Contact')} className=" cursor-pointer text-decoration-none 
  transition-all 
  duration-300 
  ease-in-out no-underline hover:no-underline text-[17px]
  hover:-translate-y-0.5 font-bold">Contact</a>
          </ul>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 bg-white rounded-md shadow-sm p-3">
        <a href="#skills" className="hover:text-indigo-600">Skills</a>
        <a href="#about" className="hover:text-indigo-600">About</a>    
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </ul>
          
        </div>
        
      )}
    </header>
</>
  )
}
