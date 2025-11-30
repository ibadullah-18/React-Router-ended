import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/');
        },3000);

        return () => clearTimeout(timer);
    },[])

  return (
    <div className='w-full h-screen flex justify-center text-2xl font-semibold'>NotFound</div>
  )
}

export default NotFound