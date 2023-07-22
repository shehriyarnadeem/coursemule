import React, { useEffect } from 'react';
import Head from 'next/head';
import Introduction from "../components/Home/Introduction";
import CardList from "../components/Card";
import Heading from "../components/Heading";
import Link from 'next/link';
// import Image from 'next/image';
import {fetchCourses} from '../features/courses/coursesSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function index() {

  const courses = useSelector((state) => state.courses?.courses)
  const dispatch = useDispatch()
  useEffect(() =>{
    fetchCourses(dispatch)
  },[]) 


  return (
    <div>
      <Head>
        <title>Course Digger</title>
        <meta
          name="description"
          content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
        />
        <meta
          name="keywords"
          content="Javascript, Building Websites, Learn React, Software Engineer Blogs, Learn Javascript"
        />
        <meta name="google-site-verification" content="8SncLVGBqWIau-lr7iETiDx8F8bWqLo1v9LkQyf9_R8" />
        <meta
          name="image"
          content="https://shehriyarnadeem.dev/urlThumbnail.png"
        />
        <meta property="og:url" content="http://shehriyarnadeem.dev" />
        <meta property="og:title" content="Shehriyar Nadeem" />
        <meta
      property="og:description"
      content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
    />
    <meta
      property="og:image"
      content="https://shehriyarnadeem.dev/urlThumbnail.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@Sharlil" />
    <meta name="twitter:site" content="@Sharlil" />
    <meta name="twitter:title" content="Shehriyar Nadeem" />
    <meta
      name="twitter:description"
      content="Come check out how Shehriyar Nadeem can help you level up your career as a software engineer."
    />
    <meta
      name="twitter:image"
      content="https://shehriyarnadeem.dev/urlThumbnail.png"
    />
    <meta name="twitter:alt" content="Shehriyar Nadeem" />
    <link rel="canonical" href="http://shehriyarndeem.dev" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lobster&family=Mulish:wght@200&display=swap" rel="stylesheet" />
    {/* <!-- Fathom - beautiful, simple website analytics --> */}
    <script src="https://cdn.usefathom.com/script.js" data-site="HXSYKITK" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
   {/* <!-- / Fathom --> */}
      </Head>

      <main className="min-h-screen  bg-primary dark:bg-primary place-items-center grid">
        <div>
          <Introduction />
          
          <div className="flex-1 my-[10rem]">
              <Heading title="New Courses" placementStyle="justify-center" extrastyle='text-5xl font-semibold' />
               <div className="w-[80%] py-10 lg:px-0 px-3 mx-auto flex flex-wrap justify-between items-center" style={{flexWrap: 'wrap'}}>
               {courses.length > 0 ?
                courses.map((course) => {
                  return (
                  
                <div key={course._id} style={{marginBottom: '10px'}}>
                  <div className="cursor-pointer" key={Math.random()}>
                      <Link href={`/course/${course._id}`}>
                          <img src={course.image.location} className="rounded-lg shadow-lg" width={550} height={300} objectFit="cover" alt="dummy"/>
                      </Link>
                  </div>
                  <CardList course={course} key={Math.random()} />
                  </div>
                  
                )
                }) : (<div key={Math.random()}></div>)}
          </div>
          </div>
          <div className='justify-center flex cursor-pointer'><Link href={`/blogs`}><h3 className="text-xl dark:text-dark text-light  hover:dark:text-white">Read More</h3></Link></div>
          <div className="py-11"></div>
        </div>
      </main>
    </div>
  )
}



