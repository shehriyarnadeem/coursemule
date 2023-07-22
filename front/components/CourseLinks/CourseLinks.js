import React from 'react'
function CourseLinks(props) {

  return (
    <div className="flex flex-col h-[528] w-[20rem] p-[20]  overflow-y-scroll">


        {props && props.links &&  props.links.length > 0 ? props?.links.map(link =>{
            // eslint-disable-next-line react/jsx-key
            return  (
            // eslint-disable-next-line react/jsx-key
            <button onClick={()=>props.setSelectedVideo(link)}>
            <div className='flex flex-col p-[15px] place-items-start border-b'>
                <p className='text-[#969494] text-[0.95rem] font-semibold uppercase leading-6'>Lesson No. {link?.number}</p>
                <span className='text-[#dad8de] text-[0.875rem] font-semibold mb-[3px] font-semibold'>{link?.title}</span>
           </div>
            </button>
            ) 

        }):(
          <h2>Not available</h2>
        )}                 

  </div>
  )
}

export default CourseLinks