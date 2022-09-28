import Axios from './Axios.jsx';

export function createDevice(data) {
    
  return(
    Axios.post('createdevice',JSON.stringify(data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
  )
}


export function getDevices() {
    return(
        Axios.get('getdevice')
    )
}

