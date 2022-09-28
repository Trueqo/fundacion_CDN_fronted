import React, { useState } from 'react'
import Hola from '../components/Hola'
import Sidebar from '../components/Sidebar'
import Add from '../Pages/Add';
import AddInformation from '../Pages/AddInformation';
import Home from '../Pages/Home';
import Matriz from '../Pages/Matriz';

const Dashboard = () => {
  const [component, setComponent] = useState(1);
  
  return (
    
    <div className='w-full h-screen bg-[#b9b9b9] flex'>
        <div className='w-[14rem] h-screen bg-white'>
            <Sidebar handleShow={setComponent}/>
        </div>
        <div className='w-full h-screen'>
          {component === 1 && <Home/>}
          {component === 2 && <Matriz/>}
          {component === 4 && <Add/>}
        </div>
    </div>
  )
}

export default Dashboard