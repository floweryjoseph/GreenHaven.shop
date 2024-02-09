import Button from '../../components/shared/button';
import { cartData } from '../../utils/DUMMY_DATA'
const AllOrders = () => {
 return (
    <div className='mt-[60px] flex flex-col gap-1 items-center justify-center'>
      <p className='w-full h-[50px] flex justify-center items-center font-extrabold text-3xl text-primary'>All Orders</p>
          <div className='bg-gray-200 flex justify-evenly items-center h-[70px] w-full px-10 text-center'>
               <h1 className='text-black font-bold w-[10%]'>Order ID</h1>
               <h1 className='text-black font-bold w-[10%]'>Item</h1>
               <h1 className='text-black font-bold w-[10%]'>Quantity</h1>
               <h1 className='text-black font-bold w-[10%]'>Payment Status</h1>
               <h1 className='text-black font-bold w-[10%]'>Price</h1>
               <h1 className='text-black font-bold w-[40%]'>Address</h1>
               <h1 className='text-black font-bold w-[10%]'>Update</h1>
</div>
      {cartData.map((product)=>(
        product.quantity>0 && (<div key={product.id}className='bg-gray-200 flex justify-evenly items-center h-[100px] w-full px-10 text-center'>
        <h2 className='text-gray-800 text-lg w-[10%]'>{product.id}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{product.item}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{product.quantity}</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>COD</h2>
        <h2 className='text-gray-800 text-lg w-[10%]'>{product.price}</h2>

        <div className='flex flex-col gap-2 text-gray-800 w-[40%]'>
            <p className='' >Chathiyankulangara devi kshethram</p>
            <p className='' >7907210934 , iritty</p>
          </div>
        
        <div className='flex gap-2 items-center'>

        <Button btnType='Update' className='text-sm' /> 
        <Button btnType='Cancel' className='text-sm'/>       
         </div> 
       </div>)
      ))}
    </div>
  )
}
export default AllOrders;