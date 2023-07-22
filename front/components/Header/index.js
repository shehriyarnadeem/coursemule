
import React, { useState, useEffect } from 'react'
import NavMenu from '../NavMenu';
import { useDarkMode } from '../../common/hooks'
import Button from '../UI/Button';
import Link from 'next/link'
import {setAuthenticatedUser, setUserError} from '../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import {get, post} from '../../common/ApiClient'
import { useRouter } from 'next/router';
// import Image from 'next/image';

function Header() {
    const { colorTheme, setTheme } = useDarkMode();
    const [ openMobileMenu, setMobileMenu ] = useState(false);
    const router = useRouter();
    const user = useSelector((state) => state?.user?.authenticatedUser);
    const isAuthenticated = user && user.isAuthenticated ? true: false;
        // Perform localStorage actio
    const dispatch = useDispatch()

  const logOut = async () =>{
    try {
        debugger;
        const response = await post('/user/logout');
        if(response?.data?.error){
           dispatch(setUserError(res?.data?.error));
           dispatch(setAuthenticatedUser(null));
        }else{
           dispatch(setAuthenticatedUser(null));
        }
             
        router.push('/');
      } catch(e){
        return e;
      }
  }
    
    const DarkModeButton = () => {

        if (colorTheme === "light") {
            return <Button className="btn btn-circle btn-lg" onClickHandler={() => setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </Button>
        } else {
            return <Button className="btn btn-circle bg-base-100" onClickHandler={() => setTheme('dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            </Button>
        }

    }

    return (

<nav className="px-2 sm:px-4 rounded  lg:w-full md:w-full mt-[-70px]">
  <div className="container flex justify-between justify-center items-center">
  <div>
    <Link href="/">
    <img src="/logo.png" alt="Logo" width={290} height={270}/>
    </Link>
 </div>
  <div className="flex items-center md:order-2 mt-2">
    
       <DarkModeButton />
       {isAuthenticated ? (
       <Button className="btn btn-circle btn-lg" onClickHandler={logOut}>
          <h3>SignOut</h3>
       </Button>
       ):(

        <Link  href="/login">
        <a className="cursor-pointer dark:text-white text-black">Login</a>
       </Link>
       )} 
       
      <Button onClickHandler={()=> setMobileMenu(!openMobileMenu)} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </Button>
  </div>
  {/* Center */}
   <NavMenu open={openMobileMenu} />
  </div>
</nav>
    )
}

export default Header
