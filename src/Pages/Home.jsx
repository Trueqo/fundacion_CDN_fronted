import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import {getDevices} from '../Service/createDevice'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('https://fundacion-cdn.vercel.app/getdevice')
    .then(res => {
      setData(res.data)
      console.log("equipos biomedicos: ", res.data)
    }).catch(err => console.log(err))
  }, []);



  return (
    <div className='w-full h-full flex flex-col gap-y-2 items-center justify-center'>
        <h1 className='text-[#3c7791] text-[3rem]'>
            Equipos Biomedicos registrados
        </h1>
        <table className='bg-slate-100 border border-black '>
          <tr className='bg-gray-500 border border-black flex flex-row justify-between
          px-2 gap-8 text-center'>
            <th className=''>Nombre equipo</th>
            <th className=''>Serial</th>
            <th className=''>Precinto</th>
          </tr>
          
            {
              data.map((datos)=>{
                return(
                  <tr className='flex flex-row justify-between 
                  px-2 gap-16'>
                    <td>{datos.nombre}</td>
                    <td>{datos.precinto}</td>
                    <td>{datos.serie}</td>
                  </tr>
                )
              })
            }
          
        </table>

    </div>
  )
}

export default Home