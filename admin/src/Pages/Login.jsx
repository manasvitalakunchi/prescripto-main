
import React, {useState} from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { useContext } from 'react'
import {AdminContext} from '../context/AdminContext.jsx'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext.jsx'


const Login = () => {

    const [state, setState] = useState('Admin')
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    
  
    const { setDToken } = useContext(DoctorContext)
    const { setAToken,backendUrl } = useContext
    (AdminContext)

    // console.log('Context backendUrl:', backendUrl);

  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
  
      try {
        if (state === 'Admin') {
          const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
          if (data.success) {
            setAToken(data.token)
            localStorage.setItem('aToken', data.token)
          } else {
            toast.error(data.message)
          }
        } else {
          const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
          if (data.success) {
            setDToken(data.token)
            localStorage.setItem('dToken', data.token)
          } else {
            toast.error(data.message)
          }
        }
      } catch (error) {
        console.error('Login error:', error)
        toast.error('Login failed. Please check your credentials and try again.')
      }
    }
  return (
    <form onSubmit={onSubmitHandler}  className='min-h-[80vh] flex items-center'>
      <div key={state} className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg animate-[fadeInUp_0.6s_ease-out]'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input onChange={(e)=> setPassword(e.target.value)} value={password}  className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          state === 'Admin'
            ? <p className='transition-all duration-300'>Doctor Login? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer hover:text-blue-600 transition-colors duration-200'>Click here</span></p>
            : <p className='transition-all duration-300'>Admin Login? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer hover:text-blue-600 transition-colors duration-200'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login