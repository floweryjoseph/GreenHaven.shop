
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUpPage = () => {
   const[isVisible, setIsVisible] = useState(false)
  const[isVisibleConfirm, setIsVisibleConfirm] = useState(false)
  const[err,setErr] = useState('')
  const[name,setName] = useState('')
  const[mobile, setMobile] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('')
  
 const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(prev =>!prev)

  }

  const toggleVisibilityConfirm = () => {
    setIsVisibleConfirm(prev =>!prev)

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
        name,
        mobile,
        email,
        password
    }
 
        const response = await axios.post('http://localhost:5000/auth/signup', body);
        if(response.data.status===true){
            navigate('/')
        }else{
            setErr("Could Not Sign Up")
        }
       
}
  
  return (
    <div className="w-full min-h-screen flex gap-10 justify-center items-center flex-col">
      <form className='flex flex-col w-[350px] h-auto justify-center items-center border-2 border-gray-500 rounded-lg gap-8 p-5' action='' onSubmit={(e) => handleSubmit(e)}>
      <h3 className="text-2xl font-bold text-primary">Sign Up</h3>
      <input onChange ={(e)=> setName(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Name' type='text' name="fullName"  required/>
      <input onChange ={(e)=> setMobile(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Mobile Number' type="text" name="mobile"  required/>
        <input onChange ={(e)=> setEmail(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your email' type="email" name="email" required/>
          <div className="relative w-full"> 
          {/* <input onChange={handleChange}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Here' type ="password" name="password" value={formData.password}/>  */}

         <input onChange={(e)=> setPassword(e.target.value)}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Here'type = {isVisible ? "text" :"password"} name="password" required/>
       {isVisible ? <VisibilityOffIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/> : <VisibilityIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/>} 
        </div>
        <div className="relative w-full">
        <input onChange={(e)=> setConfirmPassword(e.target.value)}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Again'type = {isVisibleConfirm ? "text" :"password"} required/> 
       {isVisibleConfirm ? <VisibilityOffIcon onClick={toggleVisibilityConfirm}className="absolute right-2 top-2 text-zinc-600"/> : <VisibilityIcon onClick={toggleVisibilityConfirm}className="absolute right-2 top-2 text-zinc-600"/>}
        </div>
        <button type="submit">Signup</button>
        <div className="flex gap-2 items-center justify-center"> 
        <p className="text-sm">Already a user?</p><Link to={'/login'}><span className="text-blue-500 text-sm">Login</span></Link>
        </div>
      </form>
      <p className='text-red-500 text-sm'>{err&&err}</p>
    </div>
  )
}

export default SignUpPage