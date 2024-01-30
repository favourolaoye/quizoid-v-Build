import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useLoginMutation } from "../src/slices/usersApiSlice";
import { setCredentials } from "../src/slices/authSlice";
import {toast} from "react-toastify";
import {FormControl, FormLabel, Input, Button,Flex, Heading} from '@chakra-ui/react';

//
export default function Login() {
  const [matric, setMatric] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [login, {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state)=> state.auth);

  useEffect(() => {
    if(userInfo) {
      // navigate('/onboarding');

    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      
      const result = await login({matric, password}).unwrap();
      dispatch(setCredentials({...result}));
      navigate('/onboarding');
    }
    catch(err){
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
<>
  <Flex alignItems={'center'} width={"100%"} justifyContent={'center'} height='100%'>
   <FormControl width={"fit-content"} height="fit-content" method="POST">
      <Heading size="md">Login Student</Heading>
      <FormLabel mb='20px'>Matric number</FormLabel>
        <Input 
        style={{mb:'20px'}}
        type="text" 
        value={matric}
        placeholder='matric number' 
        onChange={ (e)=> setMatric(e.target.value) } 
        />
        <FormLabel>Password</FormLabel>
        <Input 
        style={{mb:'20px'}}
        type="password" 
        value={password}
        placeholder='Enter password' 
        onChange={ (e)=> setPassword(e.target.value) } 
        />
        {isLoading ? <Button isLoading loadingText="signing in..."></Button>: <Button onClick={submitHandler}>Login</Button>}     
    </FormControl>
  </Flex>
</>
  )
}
