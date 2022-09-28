import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/img/LOGO-CLINICA.png'
import { GiHamburgerMenu } from 'react-icons/gi';


const Sidebar = ({handleShow}) => {
    return (
        <div className='w-full h-full'>

            <div className='flex items-center justify-center'>
                <label className='text-[3rem] my-3'>
                    <GiHamburgerMenu/>
                </label>
            </div>

            <ul className='flex flex-col  justify-center w-full  px-[3rem]'>
                <li className='mb-[2.5rem] border-b-[0.1rem] w-full text-center border-gray-500 '>
                    <button onClick={()=>{handleShow(1)}} className='w-full'>Inicio</button>
                </li>
                <li className='mb-[2.5rem] border-b-[0.1rem] w-full text-center border-gray-500'>
                    <button onClick={()=>{handleShow(2)}} className='w-full'>Matriz</button>
                </li>
                {/* <li className='mb-[2.5rem] border-b-[0.1rem] w-full text-center border-gray-500'>
                    <button onClick={()=>{handleShow(3)}} className='w-full'>Ingresar informacion</button>
                </li> */}
                <li className='mb-[2.5rem] border-b-[0.1rem] w-full text-center border-gray-500'>
                    <button onClick={()=>{handleShow(4)}} className='w-full'>Añadir equipo biomedico</button>
                </li>
                <li className='mb-[1.5rem] border-b-[0.1rem] w-full text-center border-gray-500'>
                    <Link to='/'>
                        <button className='w-full'>Salir</button>
                    </Link>
                </li>
            </ul>
            <div className='flex items-center justify-center'>
                <img src={logo} className='w-[6rem]' />
            </div>
        </div>
    )
}

export default Sidebar