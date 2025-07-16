import React, { useEffect, useRef } from 'react'
import { User } from './User'
import Massage from './Massage'
import { useDispatch, useSelector } from 'react-redux';
import { getmessageuserThunk,  } from '../../store/slice/messsage/messagethunk';
import SendMessage from './SendMessage';

export const MessageContainer = () => {
  let dispatch=useDispatch()
  
  const {selectedUser}=useSelector(state=>state.userReducer)
  const {message}=useSelector(state=>state.messagereducer)
  useEffect(() => {
  if (selectedUser && !localStorage.getItem('firstTimeUserSelected')) {
    localStorage.setItem('firstTimeUserSelected', 'true');
    window.location.reload();
  }
}, [selectedUser]);
  
useEffect(()=>{
  if(selectedUser?._id) {
  
 dispatch(getmessageuserThunk({recieverId:selectedUser?._id}))
  }
 
  },[selectedUser])

  
  return (
    <>{
    !selectedUser?(
      <> 
      <div className='hidden sm:flex flex-col items-center w-full justify-center '>
        <h1 className='text-2xl font-semibold'>welcome to nexttalk</h1>
      <p className='text-xl'>please select user</p>
      </div></>
    ):(

 <div className='h-screen w-full hidden- flex-col'>
        <div className='p-3 border-b'>
            <User otherDatils={selectedUser} />
        </div>
        <div className='overflow-y-scroll h-[77.5%]   '>
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
