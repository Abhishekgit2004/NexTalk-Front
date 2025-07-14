import React from 'react'
import { useSelector } from 'react-redux'
import { sendmessageuserThunk } from '../../store/slice/messsage/messagethunk'
import { useRef } from 'react'
import { useEffect } from 'react'

const Massage = ({messageDetails}) => {

const messageRef=useRef(null)
  const {userProfile}=useSelector(state=>state.userReducer)
  const {selectedUser}=useSelector(state=>state.userReducer)
 

  useEffect(()=>{
if(messageRef.current){
  messageRef.current.scrollIntoView({behavior:"smooth"})
}
},[])
  return (
   <>
   <div ref={messageRef} className={`chat  ${messageDetails?.senderId==userProfile?._id ? "chat-end":"chat-start"}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={messageDetails?.senderId==userProfile?._id?userProfile?.avatar:selectedUser?.avatar}
      />
    </div>
  </div>
  <div className="chat-header gap-2">

    {/* <time className="text-xs opacity-50">{messageDetails?.updatedAt
}</time> */}
  </div>
  <div className="chat-bubble">{messageDetails?.messages}</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      
    </div>
  </div>



</div>
   </>
  )
}

export default Massage