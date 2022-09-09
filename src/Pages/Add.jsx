import React from 'react'
import FormAddEquipment from '../components/FormAddEquipment'

const Add = () => {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-center'>
        <h1 className='text-[#3c7791] text-[2rem] mb-2'>
          Ingrese un equipo Biomedico
        </h1>
        <FormAddEquipment/>
    </div>
  )
}

export default Add