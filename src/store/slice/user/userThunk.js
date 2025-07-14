import {
  createAsyncThunk,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../../pages/axiosinstance";
export const LoginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      let response = await axiosInstance.post("/users/login", {
        username,
        password,
      });
    
      toast.success("login successfull");
      return response.data;
    } catch (error) {
      console.log(error);
      let errormsg = error?.response?.data?.errmessage;

      toast.error(errormsg);

      return rejectWithValue(a || "register failed");
    }
  }
);

export const RegisterUserThunk = createAsyncThunk(
  "user/register",async (
     formdata,
    { rejectWithValue }
  ) => {
    try {
      let response = await axiosInstance.post("/users/register", 
       formdata,
        {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      // console.log(response.data);
      toast.success("register successfull");
      return response.data;
    } catch (error) {
      console.log(error);

      let errormsg = error?.response?.data?.errmessage;
      toast.error(errormsg);

      return rejectWithValue(a || "Login failed");
    }
  }
);


export const logOutrUserThunk = createAsyncThunk(
  "user/logout",async (
    
   _,{rejectWithValue}
  ) => {
    try {
      let response = await axiosInstance.post("/users/logout", 
        );
      
     
      toast.success("logout succssfully");
      // console.log(response)
      return response?.data;
    } catch (error) {
     

        let errormsg = error?.message;
// console.log(errormsg)
      toast.error(errormsg);
      return rejectWithValue(errormsg)

      
   

    }
  }
);


export const GetprogileUser = createAsyncThunk(
  "user/get-profile",async (
    
   _,{rejectWithValue}
  ) => {
    try {
      let response = await axiosInstance.get("/users/get-profile", {
        withCredentials:true
      }
        );
      
     
    
  
      return response?.data;
    } 
    catch (error) {
     

        let errormsg = error?.message;
console.log(errormsg)
      // toast.error(errormsg);
      return rejectWithValue(errormsg)

      
   

    }
  }



);


export const getOtherUserThunk = createAsyncThunk(
  "user/getOtheruser",async (
    
     _id,
    { rejectWithValue }
  ) => {
    try {
      let response = await axiosInstance.get("/users/getothers", {
        withCredentials:true
      }
      
      );
      
      
      return response.data;
    } catch (error) {
      
console.log(error)
      let errormsg = error?.response?.data?.errmessage;
      
console.log(errormsg)
      return rejectWithValue(errormsg || "Login failed");
    }
  }
);