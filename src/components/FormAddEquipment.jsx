import React from 'react'
import { Formik } from 'formik'
import { createDevice, getDevices } from '../Service/createDevice'


const FormAddEquipment = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Equipo añadido correctamente')
    }



    return (
        <div className='bg-white p-4 rounded-xl'>
            <Formik
                initialValues={{
                    nombre:'',
                    serie:'',
                    precinto:''
                }}
                onSubmit={(datos)=>{
                    console.log(datos)
                    console.log('Equipo añadido correctamente')
                    createDevice(datos).then(res=>{
                        console.log(res)
                    }).then(err=>{
                        console.log(err)
                    })
                    getDevices().then(res=>{
                        console.log(res)
                    })
                }}
            >
                {({handleSubmit, values, handleChange, handleBlur}) => (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor='nombre'>Nombre del equipo</label>
                            <input 
                            type='text' 
                            id='nombre' 
                            name='nombre' 
                            placeholder='nombre del equipo' 
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='border border-black px-1'
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor='precinto'>Serial del equipo</label>
                            <input 
                            type='precinto' 
                            id='precinto' 
                            name='precinto' 
                            placeholder='Precinto' 
                            value={values.precinto} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='border border-black px-1'
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor='serie'>Serial del equipo</label>
                            <input 
                            type='text' 
                            id='serie' 
                            name='serie' 
                            placeholder='Serial del equipo' 
                            value={values.serie} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='border border-black px-1'
                            />
                        </div>

                        

                        <button 
                        type='submit' 
                        className='mt-2 bg-[#3c7791] rounded-[0.2rem]'
                        >
                            Añadir equipo
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormAddEquipment