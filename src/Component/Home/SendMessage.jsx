  import React, { useRef, useState } from 'react'
  import { IoIosSend } from "react-icons/io";
  import { useDispatch, useSelector } from 'react-redux';
  import { sendmessageuserThunk } from '../../store/slice/messsage/messagethunk';
  import { FaArrowAltCircleLeft } from "react-icons/fa";
  import { setSelectedUser } from '../../store/slice/user/user.slice';
  import { MessageContainer } from './MessageContainer';

  const SendMessage = () => {
  const [message,setmessage]=useState("")
    let {selectedUser}=useSelector(state=>state.userReducer)
  let [dis,setdis]=useState("flex")


  let dispatch=useDispatch()


  const handelClick=()=>{
      dispatch(sendmessageuserThunk({recieverId:selectedUser?._id,message}))

        
  }
  

    return (
    <div className={`w-full ${dis}  gap-5 p-4 ` }>
        <button className='btn btn-outline btn-primary sm:hidden  ' onClick={ ()=>dispatch(setSelectedUser(null))} > <FaArrowAltCircleLeft className='size-5'/></button>
  
    <input type="text" className="input w-full   " onChange={(e)=> setmessage( e.target.value)} placeholder="Type here" />
    <button className='btn btn-outline btn-primary  'onClick={handelClick}>
  <IoIosSend className='size-8 ' /></button>

          </div>
    )
  }

  export default SendMessage