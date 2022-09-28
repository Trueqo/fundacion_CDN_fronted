import Axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react'
import { getDevices } from '../Service/createDevice'
import DataTable from 'react-data-table-component';
import Modal from '../components/Modal';




const Home = ({showModal, setShowModal}) => {

  
  const [data, setData] = useState([])
  const [input, setInput] = useState("")
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    Axios.get('https://fundacion-cdn.vercel.app/getdevice')
      .then(res => {
        setData(res.data)
        setFilterData(res.data)
        console.log("equipos biomedicos: ", res.data)
      }).catch(err => console.log(err))
      
  }, []);

  useEffect(() => {
    const newdata = data.filter((val) => val.serie.toLowerCase().includes(input.toLowerCase()))
    console.log("data: ", data)
    setFilterData(newdata)
  },[input])

  


  const columns = [
    {
      name: 'Nombre',
      selector: row => row.nombre,
    },
    {
      name: 'Serial',
      selector: row => row.serie,
    },
    {
      name: 'precinto',
      selector: row => row.precinto,
    },
    {
      name: 'Ver más',
      cell: row => <Modal setShowModal={setShowModal} showModal={showModal} datos={row} />
    }
  ]


  function handleChange(e){
    setInput(e.target.value)
    console.log(input)
  }
      
      
  console.log("soy filterdata",filterData)
  return (
    
    <div className='w-full h-full flex flex-col gap-y-2 items-center justify-center pb-6'>
      
      

      <h1 className='text-[#3c7791] text-[3rem] mx-auto '>
        Equipos Biomedicos registrados
      </h1>

      <input 
        type="text" 
        className="bg-gray outline-none border-b-2 text-center" 
        placeholder="Buscar por serie"
        onChange={handleChange}
      />

      <div className='w-[80%] h-auto overflow-y-auto'>
        <DataTable
          title="Equipos Biomedicos"
          columns={columns}
          data={filterData}
          pagination
          highlightOnHover
          pointerOnHover
          responsive
          subHeader={true}
          
        />
      </div>
      
    </div>
  )
}

export default Home