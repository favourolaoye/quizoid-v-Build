import{
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  Navigate,
  RouterProvider
  } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import RootLayout from '../layout/Rootlayout';
import Onboarding from '../pages/onboarding';

import { useSelector} from "react-redux";
import { Children } from 'react';

export default function App() {
  const {userInfo} = useSelector((state)=> state.auth);

  const ProtectedRoute = ({children})=> {
    if(!userInfo){
    return <Navigate to="/login"/>
  }
  return children
}
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index={true} path="/" element={<Login/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path='onboarding' element={<ProtectedRoute><Onboarding/></ProtectedRoute>}/>
    </Route>
    )
   )
   return (
    
    <RouterProvider router={router} /> 

  )
}
