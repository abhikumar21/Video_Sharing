import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     loginStart: (state) => {
        state.loading = true;
     },
     loginSuccess: (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
     },
     loginFailure: (state) => {
        state.loading = false;
        state.error = true;
     },
     signupStart: (state) => {
      state.loading = true;
     },
     signupSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
     },
     signupFailure: (state) => {
      state.loading = false;
      state.error = true;
     },
     logout: (state) => {
      //   return initialState;
      state.currentUser= null;
      state.loading= false;
      state.error= false;
     },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginStart, loginSuccess, loginFailure, logout, signupStart, signupSuccess, signupFailure } = userSlice.actions
  
  export default userSlice.reducer