import{
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
  } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import RootLayout from '../layout/Rootlayout';
import Onboarding from '../pages/onboarding';



export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index={true} path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/onboarding' element={<Onboarding/>}/>
    </Route>
    )
   )
   return (
    
    <RouterProvider router={router} /> 

  )
}
