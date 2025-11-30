import Card from '../companents/Card'
import Loading from '../companents/Loading'
import { useState ,useEffect} from 'react'

const Product = () => {
  const [loading, setLoading] = useState(false)
  const [searchtrem, setSearchterm] = useState('')
  const [products, setProduct] = useState([])

  const getProducts = async () => {
    try {
      setLoading(true);
      const re = await fetch(searchtrem.length >= 3 ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchtrem}` : "https://ilkinibadov.com/api/v1/products");
      if(re.ok){
      const data = await re.json();
      console.log(data);
      setProduct(searchtrem.length >= 3? data.content : data.products);
    }
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getProducts();
  }, [searchtrem])


  return (
  <>
  <div className='w-full flex justify-center py-5'>
    <input className='borber border-zinc-300 p-3 min-w-[300px]' value={searchtrem} type="text" placeholder='Search for any product' onChange={(e)=>{
      setSearchterm(e.target.value)
    }} />
  </div>
    {
    loading ? <Loading/> : <div className='w-full h-screen grid grid-cols-4 gap-4 p-6 '>
      {products.length ? products.map( product => <Card key={product._id} product={product}/>) : "No products found"}
    </div>
    }
  </>
  )
}

export default Product