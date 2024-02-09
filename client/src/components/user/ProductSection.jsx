
import Button from '../shared/button'


const ProductSection = (props) => {
    return (
        <>
            <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-5'>Products</h1>
            <div className='w-full mt-2 bg-gray-200 h-[350px] py-8 px-10 whitespace-nowrap
             overflow-x-auto overflow-y-hidden scroll-width'>
                <div className='flex w-full gap-5'>
                    {props.products.map((item) => (
                        <div key={item.id} className='min-w-[250px] h-[300px] bg-white shadow-lg rounded-lg  max-md:h-[150px] max-md:w-fit px-2 flex
                             flex-col justify-evenly items-center hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer'>
                            <img className='w-full h-[50%] object-contain max-md:h-[50px] max-md:w-[50px]' src={item.imgUrl} alt="" />
                            <h4 className='text-sm text-black capitalize max-md:text-sm'>{item.name}</h4>
                            <p className='text-sm text-gray-900 capitalize  max-md:text-xs'>{item.manufacturer}</p>
                            <Button btnType={"Add to Cart"}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductSection
