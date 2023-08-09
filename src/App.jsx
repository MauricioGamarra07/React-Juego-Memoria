import { useEffect, useState } from 'react'
import './App.css'
import { girarCard, contarCartasVolteadas } from './assets/components/Funciones'
import imagen from './assets/images/rick-and-morty-poster-removebg-preview.png'

function App() {

  const [data, setData] = useState([])

  /* const arrayId = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]

  function invertirArrayIds(arr) {
    arr.sort(() => { return Math.random() - 0.5 });
    console.log(arrayId);
    setArregloId(arr);
  } */

  async function traerDatos() {
    let peticion = await fetch("https://rickandmortyapi.com/api/character?page=1").catch(e => console.log("Ocurrio un error"));
    let datos = await peticion.json();
    let array = [];
    array = datos.results;
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray[i] = array[i]
    }
    let otroArray = newArray.slice();
    console.log(otroArray);
    let data = newArray.concat(otroArray);
    console.log(data)
    data.sort(() => { return Math.random() - 0.5 });
    setData(data)
  }

  useEffect(() => {
    setTimeout(() => { traerDatos() }, 500);
  }, [])

  return (
    <div className="App">
      {/* <button onClick={()=>{traerDatos()}}>Click aqui</button> */}
      <div className="contenedor">
        <div className="cont-juego">
          {
            data.map((item, index) => (
              <div key={index} id={index} className="flip-card" onClick={(e) => {
                e.stopPropagation();
                girarCard(e.target);
                contarCartasVolteadas(e.target.parentElement.parentElement.parentElement.id, item.name)
              }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className='img-front' src={imagen} alt="" />
                  </div>
                  <div className="flip-card-back">
                    <img className='img-back' src={item.image} alt="" />
                  </div>
                </div>
              </div>
            )
            )
          }
        </div>
        <div className="card-info">
          <h1>Datos de la Partida</h1>
          <div className="contador">
            <h2>00:59</h2>
          </div>
          <h2>Aciertos Totales: <i className='num-aciertos'>0</i></h2>
          <h2>Aciertos Faltantes: <i className='num-faltantes'>10</i></h2>
        </div>
      </div>

    </div>
  )
}

export default App
