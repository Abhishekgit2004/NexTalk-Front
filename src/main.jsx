import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Authantication/Login.jsx'
import Signup from './Component/Authantication/Signup.jsx'
import { store } from './store/store.js'
import {Provider}from"react-redux"
import ProtectedRoutes from './pages/ProtectedRoutes.jsx'
const router=createBrowserRouter([

  {
    path:"/",
    
    element:
    <ProtectedRoutes><Home/> </ProtectedRoutes>
    
  },
   {
    path:"/login",
    element:<Login/> 
  },
   {
    path:"/signup",
    element:<Signup/> 
  },
],{
  future:{
    v7_startTransition: true
  },
}
)

createRoot(document.getElementById('root')).render(
 <>
  <Provider store={store}>
  <RouterProvider router={router}/>
    <App /> 
 </Provider>
</>
)
