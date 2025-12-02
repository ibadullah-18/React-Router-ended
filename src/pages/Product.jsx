import Card from '../companents/Card'
import Loading from '../companents/Loading'
import { useState, useEffect } from 'react'
import { useDarkMode } from '../stores/store'

const Product = () => {
  const [loading, setLoading] = useState(false)
  const [searchtrem, setSearchterm] = useState('')
  const [products, setProduct] = useState([])
  const { isDarkmodeEnable, toggleDarkmode } = useDarkMode()

  const getProducts = async () => {
    try {
      setLoading(true);
      const re = await fetch(searchtrem.length >= 3 ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchtrem}` : "https://ilkinibadov.com/api/v1/products");
      if (re.ok) {
        const data = await re.json();
        console.log(data);
        setProduct(searchtrem.length >= 3 ? data.content : data.products);
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
    <div className={`${isDarkmodeEnable ? "bg-gray-900 text-white " : "bg-white text-black "} transition-all duration-400 `}>
      <div className='w-full flex justify-center py-5'>
        <input className={`${isDarkmodeEnable ? " placeholder:text-white" : "text-black"} borber border-zinc-300 p-3 min-w-[300px]`} value={searchtrem} type="text" placeholder='Search for any product' onChange={(e) => {
          setSearchterm(e.target.value)
        }} />
        <button onClick={toggleDarkmode} className='w-40 bg-red-600 rounded px-3 mx-1 text-bold'>{isDarkmodeEnable ? "Disable Darkmode" : "Enable Darkmode"}</button>
      </div>
      {
        loading ? <Loading /> : <div className='w-full h-full grid grid-cols-4 gap-4 p-6 '>
          {products.length ? products.map(product => <Card key={product._id} product={product} />) : "No products found"}
        </div>
      }
    </div>
  )
}

export default Product