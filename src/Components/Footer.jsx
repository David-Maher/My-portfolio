import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div>
     <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    
    <p> © Made by David Maher {new Date().getFullYear()} with Reactjs</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/david-maher-seo/">
      <FaLinkedin className='text-2xl'/>
    </a>
    
    <a href="https://www.facebook.com/dov.maher/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer> 
    </div>
    </>
  )
}
