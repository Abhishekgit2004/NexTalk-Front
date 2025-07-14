import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user/user.slice.js'
import  messagereducer  from './slice/messsage/message.slic.js'
import  scoketreducer  from './slice/scoket/scoket.slic.js'
export const store = configureStore({
  reducer: {
    userReducer,
    messagereducer,
    scoketreducer
  },
  middleware:(getdefalutmideelware)=>
  getdefalutmideelware({
  serializableCheck:false
})
  
})