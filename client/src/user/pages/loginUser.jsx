import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const[isVisible, setIsVisible] = useState(false)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[err,setErr] = useState('')
  console.log(email)
  console.log(password)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErr("")
    const body = {
        email,
        password
    }

    const response = await axios.post('http://localhost:5000/auth/login', body);
    if(response.data.status===true){
      localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/')
    }else{
        setErr("Invalid Username or Password!!!")
    }
  }
  const toggleVisibility = () => {
    setIsVisible(prev =>!prev)

  }
  return (
    <div className="w-full min-h-screen flex gap-10 justify-center items-center flex-col">
      <form  onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[350px] h-auto justify-center items-center border-2 border-gray-500 rounded-lg gap-8 p-5' action=''>
      <h3 className="text-2xl font-bold text-primary">Login</h3>
        <input onChange ={(e)=>setEmail(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your email Here' type='email'/>
        <div className="relative w-full">
        <input onChange={(e)=>setPassword(e.target.value)}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Here'type = {isVisible ? "text" :"password"}/>
       {isVisible ? <VisibilityOffIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/> : <VisibilityIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/>}
        </div>
        <button type='submit'>Login</button> 
       <div className="flex gap-2 items-center justify-center"> 
        <p className="text-sm">Create an Account</p><Link to={'/signup'}><span className="text-blue-500 text-sm">Sign Up</span></Link>
       </div>
      </form>
      <p className='text-red-500 text-sm'>{err&&err}</p>
    </div>
  )
}

export default Login