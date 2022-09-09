import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import img1 from '../../public/img/login-bg.jpg'

const Login = () => {
  return (
    <div className='bg-red-400 min-h-screen flex flex-col justify-center items-center relative'>
        <img src={img1} className='object-cover w-full h-screen'/>
        <LoginForm/>
    </div>
  )
}

export default Login