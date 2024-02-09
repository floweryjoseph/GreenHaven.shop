import React, {useState} from "react";
import axios from 'axios'

const AddProducts = () => {
  const [product,setProduct]=useState("")
  const [price,setPrice]=useState("")
  const [type,setType]=useState("")
  const [manufacturer,setManufacturer]=useState("")
  const [supplier,setSupplier]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  const [description,setDescription]=useState("")
  console.log(product)

const handleSubmit = async(e) => {
  e.preventDefault();
  const data={
    product,
    price,
    type,
    manufacturer,
    supplier,
    imageUrl,
    description
  }
  const res = await axios.post("http://localhost:5000/admin/addproduct", data)
  console.log(res)
}

  return (
    <div className="w-full mt-[60px] min-h-screen flex flex-col gap-10 justify-center items-center">
      <h3 className="text-2xl font-bold text-primary">Add Products</h3>
      <form onSubmit={(e)=>handleSubmit(e)}
        className="flex  flex-col w-[1000px] h-auto justify-center items-center border-2 border-gray-500 rounded-lg gap-8 p-5"
        action=""
      ><div className="flex gap-5 w-full">
        <div className="flex flex-col gap-3 w-1/2">
          <input onChange={(e) => setProduct(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Product Name"
            type="text"
          />
          <input onChange={(e) => setPrice(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Product Price"
            type="text"
          />
          <select onChange={(e) => setType(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Product type"
            type="text"
            
          >
             <option >Product Type</option>
            <option value='mobile'>Mobile</option>
            <option value='electronics'>Electronics</option>
            <option value='fashion'>Fashion</option>
            <option value='beauty'>Beauty</option>
            <option value='groceries'>Groceries</option>
            <option value='furniture'>Furniture</option>
          </select>
          </div>
        <div className="flex flex-col gap-3 w-1/2">
          <input onChange={(e) => setManufacturer(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Manufacturer"
            type="text"
          />
     
          <input onChange={(e) => setSupplier(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Supplier"
            type="text"
          />
          <input onChange={(e) => setImageUrl(e.target.value)}
            className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
            placeholder="Image URL"
            type="text"
          />
      
        </div>
        </div>
        <textarea onChange={(e) => setDescription(e.target.value)}
          rows="4"
          cols="50"
          className="border-2 w-full rounded-md border-gray-500 py-2 pl-2"
          placeholder="Product Description"
          type="text"
        />
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default AddProducts;
