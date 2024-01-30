
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
// eslint-disable-next-line no-unused-vars
import {Button, FormControl, FormLabel, Input, Flex, Heading} from "@chakra-ui/react";
import { setCredentials } from "../src/slices/authSlice";
import { useRegisterMutation } from "../src/slices/usersApiSlice";


export default function Register() {
    const [matric, setMatric] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.auth);
    const [register, {isLoading}] = useRegisterMutation();

    useEffect(()=> {
      if(userInfo){
        navigate("/login");
      }

    }, [navigate, userInfo]);

    const RegisterStudent = async(e)=>{
        console.log({matric, name});
        e.preventDefault();
        if(password !== confirm){
          toast.error("password doesn't match");
        }
        else{
          try{
            const res = await register({name, email, matric, password}).unwrap();
            
            dispatch(setCredentials({...res}));
            navigate("/login");
          }catch(err){
            toast.error(err?.data?.message|| err.error);
            console.log(err?.data?.message);
          }
        }
      
    }
    
  return (
    <form  method="post" style={{display:"flex", width:'100%', padding:'20px', alignItems:'center', lineHeight:'50px', justifyContent:'center'}}>
      <input 
    
      type="text" 
      placeholder="full name" 
      value={name}
      required
      onChange={ (e)=> setName(e.target.value) } 
      />

      <input 
      type="email" 
      placeholder="Email (school provided)"
      value={email} 
      required
      onChange={ (e)=> setEmail(e.target.value) } 
      />

      <input 
      type="text" 
      placeholder="Matric Number" 
      value={matric}
      required
      onChange={ (e)=> setMatric(e.target.value) } 
      />

      <input 
      type="password" 
      placeholder="password" 
      value={password}
      required
      onChange={ (e)=> setPassword(e.target.value) } 
      />

      <input 
      type="password" 
      placeholder="confirm password"
      value={confirm} 
      required
      onChange={ (e)=> setConfirm(e.target.value) } 
      />

      {isLoading? <button></button> : <Button onClick={RegisterStudent}>Register</Button>}
    </form>
  )
}
