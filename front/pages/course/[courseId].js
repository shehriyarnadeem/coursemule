import React, {useRef, useEffect, useState} from 'react'
import Heading from '../../components/Heading'
import { useRouter } from 'next/router';
import CourseLinks from '../../components/CourseLinks/CourseLinks';
import VideoTitleJumbotron from '../../components/VideoTitleJumbotron/VideoTitleJumbotron'
import axios from 'axios';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/UI/Button';

function Course() {
    const playerRef = useRef(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [courseLinks, setCourseLinks] = useState(null)
    const [data, setCourseData] = useState([])
    const [error, setErrorMessage] = useState(null)
    const user = useSelector((state) => state?.user?.authenticatedUser);
    const isAuthenticated = user && user.isAuthenticated ? true: false;

    const router = useRouter();
    const { courseId } = router.query;

    // Accept Id from the url params and get courses by id from the backend
    // Get course id from url paramaters router react 
  useEffect(() => { 
    axios.get(`http://localhost:5000/api/course/${courseId}`)
    .then(res => res?.data?.result)
    .then((course) =>{
      const courseLinks= setLinks(course);
      setCourseLinks(courseLinks);
      setCourseData(course)
    })
    .catch(e=>{
      setErrorMessage(e.message);
    })
  },[router])


    const updateSource = (selectedVideo) => {
      setSelectedVideo(selectedVideo);
    };

  const setVideo = (selectedVideo) =>{
    updateSource(selectedVideo)

  }

  console.log(isAuthenticated,'--')
      
  const setLinks = (courseDetails) => {

    const links =courseDetails&&  courseDetails?.videos.map((video,index)=>{
      return {
        number:index+1,
        title:video?.title,
        path:video?.location
      }
    })
    return links;
  }

  
    return (
        <div className="flex min-h-screen  lg:w-screen md:w-screen mx-auto">
         <div className="flex flex-col"> 
         <div className='dark:bg-primary lg:w-screen md:w-screen'> 
         <VideoTitleJumbotron course={data}/>    
          </div>   
            <div className='flex space-y-1 px-20 py-5 my-10  sm:flex-row sm:space-y-0 sm:space-x-4 h-[100%] w-[100%]  '>
            {isAuthenticated ? (
            <><><div className="flex flex-col space-y-4 h-full w-full">
                <Plyr
                  src={selectedVideo?.path}
                  className="w-full h-full"
                  autoPlay={true}
                  controls={['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']}
                  ref={playerRef} /><Heading title={selectedVideo?.title} />
              </div></><CourseLinks links={courseLinks} setSelectedVideo={setVideo} /></>

            ):(
              <div className="flex flex-col space-y-4 h-[40em] w-full place-items-center justify-center bg-black">
              <p className='text-white font-heebo text-2xl'>This material is for authenticated users!</p>
              <Button title="Login" className="btn btn-wide btn-lg dark:bg-green-900  bg-gray-600  font-semibold font-heebo text-white tracking-[2px]" onClickHandler={()=>  router.push('/login') }/>
              </div>
            )}
            
            </div>
            </div>
        </div>
    )
}


export default Course