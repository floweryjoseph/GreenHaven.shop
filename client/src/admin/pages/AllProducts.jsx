import { useEffect, useState } from 'react';
import Button from '../../components/shared/button';
import axios from 'axios'
const AllProducts = () => {

  const [products, setProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await axios.get("http://localhost:5000/admin/allproducts")
      console.log(res.data)
      if(res.data.status){
        setProduct(res.data.products)
      }
    }

    fetchProducts()
  },[])

 return (
    <div className='mt-[60px] flex flex-col gap-1 items-center justify-center'>
      <p className='w-full h-[50px] flex justify-center items-center font-extrabold text-3xl text-primary'>All Products</p>
          <div className='bg-gray-200 flex justify-evenly items-center h-[70px] w-full px-10 text-center'>
               <h1 className='text-black font-bold w-[12%]'>Product ID</h1>
               <h1 className='text-black font-bold w-[12%]'>Image</h1>
               <h1 className='text-black font-bold w-[12%]'>Product name</h1>
               <h1 className='text-black font-bold w-[12%]'>Price</h1>
               <h1 className='text-black font-bold w-[12%]'>Manufacture</h1>
               <h1 className='text-black font-bold w-[12%]'>Supplier</h1>
               <h1 className='text-black font-bold w-[12%]'>Type</h1>
               <h1 className='text-black font-bold w-[12%]'>Edit/Delete</h1>
               
</div>
      {products.map((product)=>(
         <div key={product._id}className='bg-gray-200 flex justify-evenly items-center h-[100px] w-full px-10 text-center'>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product._id}</h2>
        <img src={product.imageUrl} className='w-[50px] h-[50px]'/>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product.product}</h2>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product.price}</h2>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product.manufacturer}</h2>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product.supplier}</h2>
        <h2 className='text-gray-800 text-lg w-[12%]'>{product.type}</h2>
        
        <div className='flex gap-2 items-center'>

        <Button btnType='Edit' className='text-sm' /> 
        <Button btnType='Delete' className='text-sm'/>       
         </div> 
       </div>)
      )}
    </div>
  )
}
export default AllProducts;
