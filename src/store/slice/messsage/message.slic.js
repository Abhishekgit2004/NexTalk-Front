import { createSlice } from "@reduxjs/toolkit";
import {  sendmessageuserThunk,getmessageuserThunk } from "./messagethunk";

const initialState={
  

   buttonloading: false,
  
    message:[]
  
   }
export const messageSlice=createSlice({
   name:"message",
   initialState,
    reducers: {
   setnewMessage:(state,action)=>{
    const newMessagess=state.message ?? []
          state.message=[...newMessagess,action.payload]
       }
    },
    extraReducers:(builder)=>{
    builder.addCase(getmessageuserThunk.pending,(state,actions)=>{     
state.buttonloading=true
        
    })
     builder.addCase(getmessageuserThunk.fulfilled,(state,actions)=>{
           
    state.buttonloading=false

     
         state.message=actions.payload?.data?.messages
        
       

    })
     builder.addCase(getmessageuserThunk.rejected,(state,actions)=>{
    state.buttonloading=false

        console.log("reject")
      

    })



      builder.addCase(sendmessageuserThunk.pending,(state,actions)=>{     
state.buttonloading=true
    })
     builder.addCase(sendmessageuserThunk.fulfilled,(state,actions)=>{
           
    state.buttonloading=false
state.message=[...state.message,actions.payload?.data]



    })
     builder.addCase(sendmessageuserThunk.rejected,(state,actions)=>{
    state.buttonloading=false

        console.log("reject")
      

    })







  




    

    
    }


})

export const {setnewMessage}=messageSlice.actions

export default messageSlice.reducer