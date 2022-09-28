import React, { useEffect, useState } from 'react'
import first from '/public/img/1.png'
import second from '/public/img/2.png'
import third from '/public/img/3.png'
import fourth from '/public/img/4.png'

const Modal = ({datos}) => {
    const [showModal, setShowModal] = useState(false);
    
    function selecImg(a){
      console.log(datos.nivelDeCarga)
      if(datos.nivelDeCarga == 1){
        return <img src={first} alt="first" />
      }else if (datos.nivelDeCarga == 2) {
        return <img src={second} alt="second" />
      }else if (datos.nivelDeCarga == 3) {
        return <img src={third} alt="third" />     
      } else {
        return <img src={fourth} alt="fourth" />
      }
    }

    function selecText(a){
      console.log(datos.nivelDeCarga)
      if(datos.nivelDeCarga == 1){
        return <label>ㅤInicio</label>
      }else if (datos.nivelDeCarga == 2) {
        return <label>ㅤFuncional</label>
      }else if (datos.nivelDeCarga == 3) {
        return <label>ㅤDecadencia</label>    
      } else {
        return <label>ㅤEstudio baja</label>
      }
    }

  return (
    <>
    <div className="">
      <button
      className="rounded font-bold bg-sky-600 px-3 py-2 text-white transition hover:bg-sky-700"
      onClick={() => {setShowModal(true); console.log(datos)}}
      > 
      Ver más
      </button>
    </div>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex flex-col items-start justify-between p-5 ">
                <div className='grid grid-cols-2 gap-x-4'>
                    <h3 className="text-3xl "><span className='text-blue-400'>Nombre:</span> {datos.nombre}</h3>
                    <h2 className="text-3xl "><span className='text-blue-400'>Ubicacion:</span> {datos.ubicacion}</h2>
                    <h3 className="text-3xl "><span className='text-blue-400'>Proveedor:</span> {datos.proveedor}</h3>
                    <h2 className="text-3xl "><span className='text-blue-400'>Placa:</span> {datos.placa}</h2>
                    <h3 className="text-3xl "><span className='text-blue-400'>Modelo:</span> {datos.modelo}</h3>
                    <h2 className="text-3xl "><span className='text-blue-400'>Marca:</span> {datos.marca}</h2>
                    <h3 className="text-3xl "><span className='text-blue-400'>Fecha de compra:</span> {datos.buyDate}</h3>
                    <h2 className="text-3xl "><span className='text-blue-400'>Fecha actual:</span> {datos.datenow}</h2>
                    <h3 className="text-3xl "><span className='text-green-400'>Vida:</span> {datos.vidaUtil}</h3>

        
                </div>
                <div className='grid grid-cols-2 w-full'>
                      <div className='flex justify-center my-auto text-[1.2rem]
                      font-bold
                      '>
                        Estado del equio:  {datos.nivelCarga ? true : selecText()}
                      </div>
                      <div className=' w-full flex justify-center '>
                        <div className=' w-[5rem] h-[5rem]'>
                          {datos.nivelCarga ? true : selecImg() }
                        </div>
                      </div>
                </div>
                
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-sky-600 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

                  <div className="p-2 ">
                    <button
                      className=" text-white bg-red-600 rounded-lg font-bold  px-6 py-2 text-base outline-none  mr-1 mb-1 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    
                  
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
  )
}

export default Modal