
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDarkMode } from '../stores/store';

const Card = ({product}) => {
  const {isDarkmodeEnable} = useDarkMode()
     const [count, setCount] = useState(0)
     
  return (
    <Link to={`/details/${product._id}`}>
      <div className={`${isDarkmodeEnable ? "text-white": "text-black"} min-w-[300px] w-full p-2.5 border border-gray-300 rounded-lg shadow-md flex flex-col justify-start items-start  hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}> 
        <div className='bg-white h-full w-[350px] flex justify-center items-center'><img className='w-full h-[250px] object-contain' src={product.image ? product.image : product.images[0]} alt="" /></div>
      
      <h1 className='text-2xl font-semibold'>{product.title}</h1>
      <p className='text-sm my-4'>{product.description}</p>
      <p className='text-red-600'>{product.currency}{product.price}</p>
    
    <div className='w-full flex  items-center py-5 gap-5'>
    <button onClick={()=>{
      setCount(prevState => prevState - 1)
    }} className='size-11 flex justify-center items-center bg-red-600 text-3xl text-white border rounded'>-</button>
    <p className='text-3xl'>{count}</p>
    <button onClick={()=>{
      setCount(prevState => prevState + 1)
    }} className='size-11 flex justify-center items-center bg-green-600 text-3xl text-white border rounded'>+</button>
  </div>
  </div>
  </Link>
  )
}

export default Card