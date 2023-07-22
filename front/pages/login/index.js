/* eslint-disable esversion: 6 */
import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import {post} from '../../common/ApiClient'
import SquareLoader from "react-spinners/SquareLoader";
import { useRouter } from 'next/router';
import {setAuthenticatedUser, setUserError} from '../../features/user/userSlice'
import {  useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

function Login() {
  const override = {
    display: "block",
  };
    const router = useRouter();
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.user?.authenticatedUser);
    const isAuthenticated = user && user.isAuthenticated ? true: false;
    useEffect(()=>{
      if(isAuthenticated){
        console.log(isAuthenticated,'---user');
        router.back();
      } 
    },[user])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);
    const setLoadingSuccessMessages =() =>{
      setLoadingMessage("Signing User")
    }
    const onSubmit = async data => {

       try{
        
         setServerError(null)
         setIsSubmitting(true);
          const response = await post('/login', data);
          debugger;
          if(response.error){
            setServerError(response.error);
            setIsSubmitting(false);
            return false
          }
          setLoadingSuccessMessages()
          dispatch(setAuthenticatedUser(response.user))
          setIsSubmitting(false);
          router.back();
        }catch(e){
          setIsSubmitting(false);
       } 
    }
  
    console.log(watch("name")); // watch input value by passing the name of it

return (
<>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  
    <h2 className="dark:bg-primary bg-primary mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  onSubmit={handleSubmit(onSubmit)}>
     
    

      <div>
        <label for="email" className="text-black  block text-sm font-medium leading-6 dark:text-white">Email</label>
        <div className="mt-2">
          <input 
            id="email" 
            userName="email" 
            type="email" 
            autocomplete="email" 
            {...register("email", { required: true })} 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="Password" className=" text-white block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input 
            id="password" 
            name="password" 
            type="password" 
            autocomplete="password" 
            {...register("password", { required: true })} 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
     
        </div>
      </div>
      {isSubmitting ? (
        <div className='flex place-items-center flex-col '>
         <SquareLoader
          color='white'
          loading={isSubmitting}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
         <h3 className='dark:text-white text-black mt-[22px]'>{loadingMessage}</h3>
        </div>
      ):(     
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        <Link href="/signUp">
        <a className='dark:text-white text-black mt-[22px]'>Create Account</a>
        </Link>
     </div>
      )}
      {serverError && (
      <div className='flex justify-center p-[10px] bg-[red]'> 
      <h3 className='dark:text-white text-black'>{serverError}</h3>
      </div>
      )}
    </form>
  </div>
</div>
</>
    )
}



export default Login
