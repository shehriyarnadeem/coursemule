import React from 'react'

export default function VideoTitleJumbotron(props) {
  return (
    <section className="bg-white dark:bg-[#181717] shadow-lg videoJumbotron ">
    <div className="py-8 px-20 mx-auto w-full lg:py-16 grid lg:grid-cols-2 gap-8 ">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props?.course?.courseTitle}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{props?.course?.courseDescription}</p>
        {/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
           
        </div> */}
      </div>
    </div>
  </section>
  
  
  
  
  
  
  
  )
}
