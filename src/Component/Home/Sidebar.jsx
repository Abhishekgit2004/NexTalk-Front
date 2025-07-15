import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { User } from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUserThunk, logOutrUserThunk } from "../../store/slice/user/userThunk";
import { useState } from "react";

export const Sidebar = () => {
let dispatch=useDispatch()
let [searchvalue,setsearchvalue]=useState('')
let [user,setuser]=useState([])
const {otherUser,userProfile,selectedUser}=useSelector(state=>state.userReducer)


useEffect(()=>{
  (async()=>{
await dispatch(getOtherUserThunk())
  })()
},[])
  const handelLogout=async()=>{
    await dispatch(logOutrUserThunk())
      
  }
  console.log(selectedUser)

  useEffect(()=>{
//error hai yahaek min call karta hua

    if(!searchvalue){
  setuser(otherUser)
    }else{
    setuser( otherUser?.filter((user) => {
     return (
      user?.username.toLowerCase().includes(searchvalue.toLowerCase()) ||
      user?.fullName.toLowerCase().includes(searchvalue.toLowerCase()) )
    }) )
    } 
 
  },[searchvalue,otherUser])
  return (
    <>
      <div className={`w-full h-screen  flex ${selectedUser?"hidden":""} sm:flex  sm:w-[20rem] flex-col `} >
      
        <div className="bg-black h-[3rem] mx-3 rounded-box flex items-center mt-2">
          <h1 className="text-[#8688fa] p-3">NexTalk</h1>
        </div>
        <div className="p-3">
          <label className="input">
            <FaSearch />
            <input type="search" onChange={(e)=>setsearchvalue(e.target.value)} className="grow" placeholder="Search" />
          </label>
        </div>
        <div className={`h-full overflow-y-scroll flex gap-3 p-2 flex-col  ` }>
         {
          user?.map(otherDatils=>(
            <User  key={otherDatils?._id} otherDatils={otherDatils} />
          ))
         }
      
        </div>
        <div className="   flex items-center justify-between p-2 ">
            <div className="avatar flex gap-4 justify-center items-center">
  <div className="ring-primary ring-offset-base-100 w-12 fke rounded-full ring-2 ring-offset-2">
    <img src={userProfile?.avatar} />
  </div>
<h1>{userProfile?.username}</h1>
</div>

        <button className="btn btn-primary  " onClick={handelLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};
