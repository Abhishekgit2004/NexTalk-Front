import { createSlice } from "@reduxjs/toolkit";
import { LoginUserThunk,RegisterUserThunk ,logOutrUserThunk,GetprogileUser,getOtherUserThunk} from "./userThunk";

const initialState={
   userProfile: null,
   screenLoading: true,
   buttonloading: false,
   isAuthenticated: false,
   otherUser: null,
   selectedUser: JSON.parse(localStorage.getItem("selectedUser"))
   }
export const UserSlice=createSlice({
   name:"User",
   initialState,
    reducers: {
         setSelectedUser: (state, action) => {

            localStorage.setItem("selectedUser",JSON.stringify(action.payload))
      state.selectedUser = action.payload;
    //   console.log(action.payload)
    }, 
    },
    extraReducers:(builder)=>{
    builder.addCase(LoginUserThunk.pending,(state,actions)=>{
        state.screenLoading=true
        state.buttonloading=true
         

        // actions.payload?.response?.data?.errmessage
    })
     builder.addCase(LoginUserThunk.fulfilled,(state,actions)=>{
            state.isAuthenticated=true
   
        state.buttonloading=false
    
        state.screenLoading=false


    })
     builder.addCase(LoginUserThunk.rejected,(state,actions)=>{
        console.log("reject")
        state.buttonloading=false
            state.isAuthenticated=false

        state.screenLoading=false   

    })




    builder.addCase(RegisterUserThunk.pending,(state,actions)=>{
        state.screenLoading=true
            

        // actions.payload?.response?.data?.errmessage
    })
     builder.addCase(RegisterUserThunk.fulfilled,(state,actions)=>{
    
     state.userProfile=actions.payload.user;
            state.isAuthenticated=true
    
        state.screenLoading=false


    })
     builder.addCase(RegisterUserThunk.rejected,(state,actions)=>{
        console.log("reject")
        state.screenLoading=false 
            state.isAuthenticated=false


    })
    


 builder.addCase(logOutrUserThunk.pending,(state,actions)=>{
        state.screenLoading=true
        // actions.payload?.response?.data?.errmessage
    })
     builder.addCase(logOutrUserThunk.fulfilled,(state,actions)=>{
    
                state.userProfile=null;
                state.selectedUser=null;
                state.otherUser=null
                localStorage.clear()
            state.isAuthenticated=false

    
        state.screenLoading=false


    })
     builder.addCase(logOutrUserThunk.rejected,(state,actions)=>{
        console.log("reject")
        state.screenLoading=true 

    })



    builder.addCase(GetprogileUser.pending,(state,actions)=>{
        state.isAuthenticated=true
        // state.screenLoading=false
        // actions.payload?.response?.data?.errmessage
    })
     builder.addCase(GetprogileUser.fulfilled,(state,actions)=>{
    
         state.screenLoading=true
         state.isAuthenticated=true
                state.userProfile=actions?.payload?.data?.User;
               
                
            

    


    })
     builder.addCase(GetprogileUser.rejected,(state,actions)=>{
        console.log("reject")
        state.screenLoading=false   

    })





    builder.addCase(getOtherUserThunk.pending,(state,actions)=>{
        
      state.screenLoading=true
    })
     builder.addCase(getOtherUserThunk.fulfilled,(state,actions)=>{
            state.otherUser=actions.payload.data
            
      state.screenLoading=false
    
            
           

       


    })
     builder.addCase(getOtherUserThunk.rejected,(state,actions)=>{
        console.log("reject")
      state.screenLoading=false

         

    })

    

    
    }


})

export const {setSelectedUser}=UserSlice.actions

export default UserSlice.reducer