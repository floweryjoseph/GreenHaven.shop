import { useEffect, useState } from 'react';
import Button from '../../components/shared/button';
import axios from 'axios'
const AllUsers = () => {

const [users, setUsers] = useState([])

useEffect(()=>{
 const fetchAllUsers = async() =>{
    const res = await axios.get('http://localhost:5000/admin/allusers')
    console.log(res.data)
    if(res.data.status){
    setUsers(res.data.users)
    }
 }
 fetchAllUsers();
},[])

 return (
    <div className='mt-[60px] flex flex-col gap-1 items-center justify-center'>
      <p className='w-full h-[50px] flex justify-center items-center font-extrabold text-3xl text-primary'>All Users</p>
          <div className='bg-gray-200 flex justify-evenly items-center h-[70px] w-full px-10 text-center'>
               <h1 className='text-black font-bold w-[15%]'>User ID</h1>
               <h1 className='text-black font-bold w-[15%]'>Full Name</h1>
               <h1 className='text-black font-bold w-[15%]'>Mobile Number</h1>
               <h1 className='text-black font-bold w-[15%]'>Email Id</h1>

</div>
      {users.map((user)=>(
        <div key={user._id} className='bg-gray-200 flex justify-evenly items-center h-[100px] w-full px-10 text-center'>
        <h2 className='text-gray-800 text-lg w-[10%]'>{user._id}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{user.fullName}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{user.mobile}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{user.email}</h2>
      
  

    
        
        {/* <div className='flex gap-2 items-center'>

        <Button btnType='Update' className='text-sm' /> 
        <Button btnType='Cancel' className='text-sm'/>       
         </div>  */}
       </div>)
      )}
    </div>
  )
}
export default AllUsers;