import { useEffect } from 'react';
import {  useDispatch } from 'react-redux'
import {setAuthenticatedUser, setUserError} from '../features/user/userSlice'
import {get} from './ApiClient'

function Layout({children}) {

    const dispatch = useDispatch()
  
  useEffect(() =>{
    fetchData().then(res=>{
      if(res?.response?.data?.error){               
          dispatch(setUserError(res?.data?.error));
          dispatch(setAuthenticatedUser(null));
       }else{           
          dispatch(setAuthenticatedUser(res?.data));
       }
   });
  },[]) 


  const fetchData = async () => {
    try {
    const response = await get('/user');
    return response;
  } catch(e){
    return e;
  }
}

  return children 
}

export default Layout