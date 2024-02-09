import { Menu, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='z-50 w-full h-[60px] px-5  bg-primary fixed top-0 left-0 flex justify-between items-center'>
    <Link to={'/admin'}><h2 className='font-extrabold text-white text-2xl max-md:text-xl'>GreenHaven.shop-admin</h2></Link>
    <div className='relative border-[0.5px] rounded-lg h-[35px] w-[340px] max-md:hidden'>
    <input className='bg-transparent border-none border-[#d3d1d3eb] h-[30px] w-[300px] text-gray-300 placeholder:text-gray-300 outline-none pl-2 py-4' placeholder='Search an Item here...' type='text'/>
    <Search className='absolute right-2 top-1 text-[#d3d1d3eb]  max-width-[80%] cursor-pointer'/>
    </div>
   
    <ul className='flex gap-6 text-white max-md:hidden'>
        <Link to={'/admin'}><li>Home</li></Link>
        <Link to={'/admin/add_products'}><li>Add Products</li></Link>
        <Link to={'/admin/all_products'}><li>All Products</li></Link>
        <Link to={'/admin/all_users'}><li>All Users</li></Link>
        <Link to={'/admin/all_orders'}><li>All Orders</li></Link>
    </ul>
      <div className='text-white max-md:block hidden'>
        <Menu />
      </div>
    </div>
  )
}

export default AdminNavbar