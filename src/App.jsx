
import { useEffect } from 'react'
import './App.css'

import {Toaster} from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import {  GetprogileUser } from './store/slice/user/userThunk'
function App() {

    // const {isAuthenticated}=useSelector(state=>state.userReducer)
let dispatch=useDispatch()
useEffect(()=>{
  (async()=>{
await dispatch(GetprogileUser());

  })()
},[])

  return (
    <>
 <Toaster
  position="top-center"
  reverseOrder={false}
/>

    </>
  )
}

export default App
