import React from 'react'
import Link from 'next/link'
function CardList({ course }) {

    return (
        <div className="flex space-y-3">
            <CardItem title={course.courseTitle} brief={course.courseDescription} slug={course.slug} dateAdded={course.dateAdded}  />
        </div>
    )
}

const CardItem = ({ title, brief, slug,dateAdded }) => {
    const date = new Date(dateAdded).toLocaleString('default', { month: 'long', year:'2-digit' });
    const path = `/blogs/${slug}`
    return (
        <>
           <Link href={path}>
            <div className="transition duration-500 ease-in-out group flex items-center hover:text-white rounded-md transform hover:scale-x-100">
                <div className="flex flex-col space-y-2 py-3 px-3 cursor-pointer max-w-[36rem]">
                    <h3 className="dark:text-darkHeading text-light font-extrabold text-2xl font-ubuntu">{title}</h3>
                    <p className='dark:text-dark text-light font-ubuntu'>{brief}</p>
                </div>
                {/* <div className=" mt-[51px]  pr-4 dark:text-dark text-light font-ubuntu">
                    <p>{date}</p>
                </div> */}
            </div>
            </Link>
        </>
    );

}
export default CardList
