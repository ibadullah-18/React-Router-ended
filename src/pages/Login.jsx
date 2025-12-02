import { useState } from 'react'
import { useTokens } from '../stores/tokenStore'

const Login = () => {
    const {setRefreshToken, setAccessToken} = useTokens()
    const [formData, setFormData] = useState({email:"", password:""})

    const handleInputChange = (title, value) => {
        setFormData(prevState => ({
            ...prevState,
            [title]: value
        }))
    }
    const handleLogin = async () => {
        try {
            const res = await fetch(`https://ilkinibadov.com/api/v1/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
            if(res.ok){
            const data = await res.json()
            setAccessToken(data.setaccessToken)
            setRefreshToken(data.setrefreshToken)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center gap-4'>
            <div className='border border-gray-300 p-8 w-min-[300px] w-full h-fit flex flex-col gap-4'>  
            <input value={formData.email} className='border border-zinc-300 p2' onChange={(e) => {
                handleInputChange('email', e.target.value)
            }} type="email" />
            <input value={formData.password} className='border border-zinc-300 p2' onChange={(e) => {
                handleInputChange('password', e.target.value)
            }} type="password" />
            <button className='bg-red-700' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login