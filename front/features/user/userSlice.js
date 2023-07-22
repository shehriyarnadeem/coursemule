import { createSlice  } from '@reduxjs/toolkit'




  const userSlice = createSlice({
    name: 'user',
    initialState: {
      authenticatedUser: null,
      error:null
    },
    reducers: {
      setAuthenticatedUser: (state, action) => {
        state.authenticatedUser = action.payload;
      },
      setUserError: (state, action) => {
         state.error = action.payload; 
      }
    },
  });

  export const { setAuthenticatedUser, setUserError } = userSlice.actions;
  export default userSlice.reducer
  
  // Action creators are generated for each case reducer function
  // export const { increment, decrement, incrementByAmount } = counterSlice.actions