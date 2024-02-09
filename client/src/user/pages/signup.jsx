
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '../../components/shared/button';

const SignUp = () => {
   const[isVisible, setIsVisible] = useState(false)
  const[isVisibleConfirm, setIsVisibleConfirm] = useState(false)
  // const[name,setName] = useState('')
  // const[mobile, setMobile] = useState('')
  // const[email, setEmail] = useState('')
  // const[password, setPassword] = useState('')
  // const[confirmPassword, setConfirmPassword] = useState('')
  // console.log(email)
  // console.log(password)
  const [formData, setFormData] = useState({
    fullName:'',
    mobile:'',
    email:'',
    password:'',
  })

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]:value});
};

 

  const toggleVisibility = () => {
    setIsVisible(prev =>!prev)

  }

  const toggleVisibilityConfirm = () => {
    setIsVisibleConfirm(prev =>!prev)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  try{
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
      });
      console.log("formData",formData)
    if(response.ok){
      console.log('User signed up successfully!');
    }else{
      console.error('Signup failed');
      
    }
  }catch(error){
    console.error('Error During Signup:', error);
  }

  };

  return (
    <div className="w-full min-h-screen flex gap-10 justify-center items-center flex-col">
      <form className='flex flex-col w-[350px] h-auto justify-center items-center border-2 border-gray-500 rounded-lg gap-8 p-5' action='' onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-primary">Sign Up</h3>
      <input onChange ={handleChange} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Name' type='text' name="fullName" value={formData.fullName}/>
      <input onChange ={handleChange} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Mobile Number' type="text" name="mobile" value={formData.mobile} />
        <input onChange ={handleChange} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your email' type="email" name="email" value={formData.email} />
          <div className="relative w-full"> 
          {/* <input onChange={handleChange}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Here' type ="password" name="password" value={formData.password}/>  */}

         <input onChange={handleChange}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Here'type = {isVisible ? "text" :"password"} name="password" value={formData.password}/>
       {isVisible ? <VisibilityOffIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/> : <VisibilityIcon onClick={toggleVisibility}className="absolute right-2 top-2 text-zinc-600"/>} 
        </div>
        <div className="relative w-full">
        <input onChange={handleChange}className='border-2 w-full rounded-md border-gray-500 py-2 pl-2'placeholder='Enter Your Password Again'type = {isVisibleConfirm ? "text" :"password"}/> 
       {isVisibleConfirm ? <VisibilityOffIcon onClick={toggleVisibilityConfirm}className="absolute right-2 top-2 text-zinc-600"/> : <VisibilityIcon onClick={toggleVisibilityConfirm}className="absolute right-2 top-2 text-zinc-600"/>}
        </div>
        <Button btnType='Sign Up'/>
        <div className="flex gap-2 items-center justify-center"> 
        <p className="text-sm">Already a user?</p><Link to={'/login'}><span className="text-blue-500 text-sm">Login</span></Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp