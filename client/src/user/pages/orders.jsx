
import { cartData } from '../../utils/Dummy_Data'
const OrdersPage = () => {
 
  return (
    <div className='mt-[60px] flex flex-col gap-2 items-center justify-center'>
      <h1 className='text-3xl font-bold text-gray my-5'>Orders</h1>
      {cartData.map((product)=> (
              product.quantity > 0 && <div key = {product.id} className='bg-gray-200 flex justify-evenly items-center h-[150px] w-full'>
              <img className='w-[100px] h-[100px] object-contain ' src={product.imgUrl} alt="" />
              <h1 className='text-gray-800 text-xl'>{product.item}</h1>
              <div className='flex items-center justify-between w-24'>
              <div className='flex flex-col gap-2'>
              <p className=''>Chathiyankulangara devi kshethram</p>
              <p className=''>7907210934 , iritty</p>
              </div>
              </div>
              <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold text-black'>arriving in 7 days?</h2>
            <h1 className='text-xl bg-primary rounded-lg py-2 px-5 text-white'>Item shipped</h1>
          </div>
          </div> 
     ))}
     
  
  
      
    </div>
  )
}

export default OrdersPage
