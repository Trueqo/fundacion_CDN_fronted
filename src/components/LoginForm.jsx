import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../public/img/LOGO-CLINICA.png'
const LoginForm = () => {
  return (
    <div className='absolute w-full h-screen flex items-center justify-center bg-gray-900/50'>
        <div className='w-[25rem] h-[25rem] bg-white rounded-[4rem] '>
            <form className='w-full h-full  flex flex-col items-center pt-[2rem] px-[4.6rem] gap-y-2'>
                <div className='w-full flex flex-row justify-center'>
                    <div className=' '>
                        <img src={img1} className='w-20 h-20'/>
                    </div>
                    <div className=' flex items-center'>
                        <h3 className='text-gray-500'>
                            Fundación clinica del norte
                        </h3>
                    </div>
                </div>
                <h1 className='w-full  font-bold'>
                    Iniciar sesión
                </h1>
                <label className='w-full'>
                    Usuario
                </label>
                <input placeholder='Usuario' className='w-full border-b-2 border-gray-300' />
                <label className='w-full'>
                    Contraseña
                </label>
                <input placeholder='Contraseña' className='w-full border-b-2 border-gray-300'/>
                <Link to='/dashboard'>
                    <button type="button" className='bg-blue-500 w-full text-white mt-2 p-1' >
                        Ingresar
                    </button>
                </Link>
                <div className='w-full flex justify-center'>
                    <label className='text-[0.7rem]'>
                        ¿Olvidaste tu contraseña?
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm