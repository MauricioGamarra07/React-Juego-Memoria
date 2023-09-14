import './App.css'
import InfoPartida from './assets/components/InfoPartida'
import { mostrarIcono, desordenarArray } from './assets/components/Funciones'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    desordenarArray()
  }, [])

  return (
    <div className="App">
      {/* <button onClick={()=>{traerDatos()}}>Click aqui</button> */}
      <div className="contenedor">
        <table>
          <tbody>
            <tr>
              <td><button className='btnCard' id='0' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='1' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='2' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='3' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='4' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
            <tr>
              <td><button className='btnCard' id='5' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='6' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='7' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='8' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='9' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
            <tr>
              <td><button className='btnCard' id='10' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='11' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='12' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='13' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='14' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
            <tr>
              <td><button className='btnCard' id='15' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='16' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='17' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='18' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='19' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
          </tbody>
        </table>
        <InfoPartida />
      </div>

    </div>
  )
}

export default App
