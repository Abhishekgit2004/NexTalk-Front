import React, { useEffect } from 'react'
import { User } from './User'
import Massage from './Massage'
import { useDispatch, useSelector } from 'react-redux';
import { getmessageuserThunk,  } from '../../store/slice/messsage/messagethunk';
import SendMessage from './SendMessage';

export const MessageContainer = () => {
  let dispatch=useDispatch()
  
  const {selectedUser}=useSelector(state=>state.userReducer)
  const {message}=useSelector(state=>state.messagereducer)
  
  
useEffect(()=>{
  if(selectedUser?._id) {
  
 dispatch(getmessageuserThunk({recieverId:selectedUser?._id}))
  }
 
  },[selectedUser])
  return (
    <>{
    !selectedUser?(
      <> <h1>pls selec user</h1></>
    ):(

 <div className='h-screen w-full flex flex-col'>
        <div className='p-3 border-b'>
            <User otherDatils={selectedUser} />
        </div>
        <div className='overflow-y-scroll h-full   '>
          {
            message?.map((messageDetails)=>(
                 <Massage key={messageDetails?._id} messageDetails={messageDetails}/>
            ))
          }
           
          
            
          
        </div>
        <SendMessage/>
    </div>
    )
    }
   
    </>
  )
}
