import Banner from '../../components/user/Banner'
import ItemsCategory from '../../components/user/ItemsCategory'
import ProductSection from '../../components/user/ProductSection'
import {products} from '../../utils/Dummy_Data'
const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <ItemsCategory />
      <Banner />
      <ProductSection products={products}/>
      <ProductSection products={products}/>
      <ProductSection products={products}/>
    </div>
  )
}

export default Home