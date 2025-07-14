import {
  createAsyncThunk,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../../pages/axiosinstance";



export const sendmessageuserThunk = createAsyncThunk(
  "user/sendmessage",
  async ({ recieverId,message }, { rejectWithValue }) => {
    try {
      let response = await axiosInstance.post(`message/send/${recieverId}`, {
       message
      });
    
    
      return response.data;
    } catch (error) {
      console.log(error);
      let errormsg = error?.response?.data?.errmessage;

   

      return rejectWithValue(errormsg || "register failed");
    }
  }
);


export const getmessageuserThunk = createAsyncThunk(
  "user/getmessage",
  async ({ recieverId,message }, { rejectWithValue }) => {
    try {
      let response = await axiosInstance.get(`message/getmessage/${recieverId}`, {
       message
      });
      
       
    //   toast.success("login successfull");
      return response.data;
    } catch (error) {

      console.log(error);

      let errormsg = error?.response?.data?.errmessage;

    //   toast.error(errormsg);

      return rejectWithValue(errormsg || "register failed");
    }
  }
);




