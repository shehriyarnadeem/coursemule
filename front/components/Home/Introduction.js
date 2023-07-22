import React from 'react'
// import Image from 'next/dist/client/image'
import Button from '../UI/Button'
import { motion } from "framer-motion"
function Introduction() {
    return (
        <>
  <section className="bg-white dark:bg-primary">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Learn It! - Developer Courses.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        Tutorials for front and back end developers. Take the knowledge of your profile from us, because we are fucking best. Seriously.
       </p>
        <div className="flex  place-items-start space-x-10 justify-center">
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />  
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />  
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />  
          <img height="50" width="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
        </div>   
        
    </div>
</section>
        </>
    )
}

export default Introduction
