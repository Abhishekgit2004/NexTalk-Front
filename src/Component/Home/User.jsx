import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../store/slice/user/user.slice'

export const User = ({otherDatils}) => {
let dispatch=useDispatch()
const {selectedUser}=useSelector(state=>state.userReducer)
 const {socket,onlineUser}=useSelector(state=>state.scoketreducer)

const isUserOnline=onlineUser?.includes(otherDatils?._id)

// console.log(onlineUser)
const handleuser=()=>{
  // if(!selectedUser) selectedUser._id=="686cfce57e3be641bf8961b1"
  dispatch(setSelectedUser(otherDatils))
}





  return (
    <div onClick={handleuser} className={` flex gap-3 p-2 items-center rounded-2xl hover:bg-gray-700 ${otherDatils?._id==selectedUser?._id && "bg-gray-700"}  `} >
      <div className={`avatar avatar-${isUserOnline?"online":"offline"}   `}>
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
    <img src={otherDatils?.avatar} />
  </div>
</div>
<div>
<h2 className='line-clamp-1'>{otherDatils?.fullName}</h2>
<p className='text-xs'>{otherDatils?.username}</p></div>
</div>
  )
}
