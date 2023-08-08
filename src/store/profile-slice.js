import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails:{
        imgURL:null,
        firstName:"",
        lastName:"",
        email:""
    }
  },reducers:{
    updateProfileDetails(state,action){
        state.profileDetails=action.payload;
    }
  }
});

export const profileActions = profileSlice.actions;

export default profileSlice;