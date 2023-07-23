import { createSlice, createAsyncThunk, createAction  } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import {get} from '../../common/ApiClient'

const initialState = {
    courses: [],
    status: 'idle',
    error: null
  }


  const courseSlice = createSlice({
    name:'courses',
    initialState,
    reducers: {
      fetchCoursesStart(state, action) {
        state.status = "loading";
        state.error = null;
        // ...
      },
      fetchCoursesSuccess(state, action) {
        state.courses = action.payload.result;
        state.status = "idle";
        // ...
      },
      fetchCoursesFailure(state, action) {
        state.status ="failed";
        // ...
      },
    },
  })
  

  export const fetchCourses = async (dispatch) => {
    
    dispatch(courseSlice.actions.fetchCoursesStart());
    try {
      const response = await get('/course');
      dispatch(courseSlice.actions.fetchCoursesSuccess(response.data));
    } catch (error) {
      dispatch(courseSlice.actions.fetchCoursesFailure(error.message));
    }
  }
  
  export default courseSlice.reducer
  
  // Action creators are generated for each case reducer function
  // export const { increment, decrement, incrementByAmount } = counterSlice.actions