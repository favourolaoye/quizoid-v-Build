import {Outlet}  from "react-router-dom";
import {Box} from '@chakra-ui/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout() {
  return (
    
      <Box>
      <ToastContainer/>
      <Outlet/>
      </Box>
      
    
   
  )
}
