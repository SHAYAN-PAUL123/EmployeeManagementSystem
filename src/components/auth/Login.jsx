import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
        const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')
        const SubmitHandler = (e) => {
            e.preventDefault()
            handleLogin(email,password)
            setEmail('')
            setPassword('')
    }

  return (
    <div className='bg-black flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            className='flex flex-col items-center justify-center' onSubmit={(e) => SubmitHandler(e)}
            >
                <input 
                value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                    }} 
                    required 
                    className='text-white border-2 outline-none bg-transparent border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' 
                    />
                <input 
                value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value)}} 
                    required 
                    className='text-white border-2 outline-none bg-transparent border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Your Password' />
                <button 
                className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login