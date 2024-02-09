import { useState } from "react"
import { cartData } from '../../utils/Dummy_Data'
import Button from './../../components/shared/button';
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState(cartData)
  const increase = (id) =>{
    const newData = cartItems.map((prod)=>{
        if(prod.id === id) {
          prod.quantity = prod.quantity + 1;
        }
        return prod;
    })
    setCartItems(newData);
  }
  
  const decrease = (id) =>{
    const newData = cartItems.map((prod)=>{
        if(prod.id === id) {
          prod.quantity = prod.quantity - 1;
        }
        return prod;
    })
    setCartItems(newData);
  }
  
  const total = cartItems.reduce((acc, item)=>{
    return acc + (item.price * item.quantity)
  },0)

  return (
    <div className='mt-[60px] flex flex-col gap-2 items-center justify-center'>
      {cartItems.map((product)=> (
              product.quantity > 0 && <div key = {product.id} className='bg-gray-200 flex justify-evenly items-center h-[150px] w-full'>
              <img className='w-[100px] h-[100px] object-contain ' src={product.imgUrl} alt="" />
              <h1 className='text-gray-800 text-xl'>{product.item}</h1>
              <div className='flex items-center justify-between w-24'>
                <button  className='bg-primary w-5 h-5 rounded-lg text-black flex justify-center items-center' onClick={()=>decrease(product.id)} >-</button>
                  <input  className='w-10 bg-transparent text-black text-center border-2 border-gray-900 rounded-lg'  type="text" value={product.quantity} />
                <button className='bg-primary w-5 h-5 rounded-lg text-black flex justify-center items-center' onClick={()=>increase(product.id)} >+</button>
              </div>
              <h2 className='text-xl font-bold text-black'>{product.price*product.quantity}</h2>
              <Button btnType="Remove Item" />
          </div> 
     ))}
     
    <div className='flex flex-col gap-5 mt-8'/>
    <h1 className='text-lg text-black font-bold'>Total  :  {total}</h1>
    <Link to={'/proceed_to_payment'} ><Button btnType="Check Out" /></Link>
  
      
    </div>
  )
}

export default Cart
