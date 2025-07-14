import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { sendmessageuserThunk } from '../../store/slice/messsage/messagethunk';

const SendMessage = () => {
const [message,setmessage]=useState("")
  const {selectedUser}=useSelector(state=>state.userReducer)


let dispatch=useDispatch()

const handelClick=()=>{
    dispatch(sendmessageuserThunk({recieverId:selectedUser?._id,message}))

      
}
  return (
   <div className='w-full flex gap-5 p-4'>
       
 
  <input type="text" className="input w-full   " onChange={(e)=> setmessage( e.target.value)} placeholder="Type here" />
  <button className='btn btn-outline btn-primary  'onClick={handelClick}>
<IoIosSend className='size-8 ' /></button>

        </div>
  )
}

export default SendMessage