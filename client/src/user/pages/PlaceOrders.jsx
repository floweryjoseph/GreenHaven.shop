
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button'

const  PlaceOrders= () => {
  return (
    <div className='w-full min-h-screen flex  justify-center mt-[70px]'>
        <div className='w-[70%] flex justify-center items-start'>
            <form className='w-[80%] flex flex-col gap-5 h-[500px] items-center justify-center '>
                <div className='w-full flex gap-2'>
                <input className='w-[50%] bg-transparent border-2 border-black rounded-lg py-2 pl-3' type="text" placeholder="Full Name"/>
                <input className='w-[50%] bg-transparent border-2 border-black rounded-lg py-2 pl-3'type="text" placeholder="Mobile Number"/> 
                </div> 
                <input className='w-full bg-transparent border-2 border-black rounded-lg py-2 pl-3'type="text" placeholder="Email"/>          
                <input className='w-full bg-transparent border-2 border-black rounded-lg py-2 pl-3'type="text" placeholder="Address Line1"/>           
                <input className='w-full bg-transparent border-2 border-black rounded-lg py-2 pl-3'type="text" placeholder="Address Line2"/>           
                <input className='w-full bg-transparent border-2 border-black rounded-lg py-2 pl-3'type="text" placeholder="Pincode"/>
                
         
        </form>
        </div>
        <div className='w-[30%] flex flex-col gap-6'>
          <h2>Total Amount :<span>150000</span></h2>
          <Link to='/payment'>
          <Button btnType ='Proceed To payment'/></Link>
        </div>
    </div>
  )
}

export default PlaceOrders