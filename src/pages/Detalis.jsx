import { useEffect, useState } from 'react' 
import { useParams} from 'react-router-dom';

const Detalis = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProdutsDetalis = async () => {
        try {
            const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
            }

        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getProdutsDetalis();
    },[id])
    
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default Detalis