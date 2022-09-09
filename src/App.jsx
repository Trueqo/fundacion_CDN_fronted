import { Route, Routes } from "react-router-dom";


// componentes
import Login from './views/Login'
import Dashboard from './views/Dashboard';


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
