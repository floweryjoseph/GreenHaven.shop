import {categories} from '../../utils/Dummy_Data'
const ItemsCategory = () => {
  return (
    <div className='min-w-full py-2 min-h-[150px] flex justify-evenly items-center pt-[70px]'>
        {categories.map((category) => (
        <div className='border-2 shadow-md hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer rounded-md w-[170px] bg-zinc-200 h-[150px] flex flex-col justify-center items-center' key={category.category}>
            <img className='max-w-[110px] max-h-[110px] object-contain' src={category.img} alt=''/>
            <h3 className='font-semibold mt-2'>{category.category}</h3>
        </div>
       ))}
    </div>
  )
}

export default ItemsCategory