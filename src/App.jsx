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

      <section className="modal">
        <div className="cont-modal">
          <h1 className="text-warning text-center">Victoria 🏆</h1>
          <i className="bx bxs-x-circle bx-md text-danger" id="boton-cerrar"></i>
          <p className='msj-modal'>Felicitaciones, usted ha ganado la partida en menos de 2 minutos. Si desea volver a jugar haga click en el botón ⬇️</p>
          <div className="pie-modal">
            <button className="btn btn-success" id="procesar">Volver a jugar</button>
          </div>
        </div>
      </section>

      <section className="modal-der">
        <div className="cont-modal">
          <h1 className="text-secondary text-center">Se agotó el tiempo 😓</h1>
          <i className="bx bxs-x-circle bx-md text-danger" id="boton-cerrar"></i>
          <p className='msj-modal-der'>Esta vez no pudiste ganar, pero lo lograrás la otra vez. Inténtalo de nuevo ⬇️</p>
          <div className="pie-modal">
            <button className="btn btn-success" id="procesar">Volver a jugar</button>
          </div>
        </div>
      </section>

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
