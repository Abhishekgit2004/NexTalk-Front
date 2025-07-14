import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import {Link, useNavigate, useNavigation} from "react-router-dom"
import { IoKeySharp } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useDispatch, useSelector }from "react-redux"
import { LoginUserThunk } from '../../store/slice/user/userThunk';

const Login = () => {
  let navigate=useNavigate()
const dispatch = useDispatch()
const [username,setName]=useState("")
const [password,setpassword]=useState("")
      const {isAuthenticated}=useSelector(state=>state.userReducer)


      useEffect(()=>{
    
  if(isAuthenticated) navigate("/")

  },[isAuthenticated])

const handelSubmit=async(e)=>{
     e.preventDefault();
  
  
 let reaponse=   await dispatch(LoginUserThunk({username,password}))



 if(reaponse?.payload?.success){
 navigate("/")
 }
}



// console.log(handelSubmit)
  return (
    <>
    <form className='flex justify-center p-6 items-center h-[100vh]'onSubmit={handelSubmit} >
    <div className='flex flex-col gap-5 w-[30rem] justify-center items-center p-6 bg-base-200 rounded-[30px]' >
        <h1>please Login</h1>
       <label className="input">
  <FaUser/>
  <input type="text" name='username' className="grow" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
 
</label>
<label className="input">
<IoKeySharp/>
  <input type="password" className="grow" placeholder="password" name='password' onChange={(e)=>setpassword(e.target.value)}/>
</label>
<button className=" w-[75%] btn btn-primary" type='submit'>Login</button>
     
      <p>do not hav an Account?  <Link  to='/signup'> <button className="btn btn-dash btn-primary">Signup</button></Link></p> 
     
    </div>
    </form>
    </>
  )
}

export default Login