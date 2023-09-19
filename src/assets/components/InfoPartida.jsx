import React from 'react'
import {comenzarJuego} from './Funciones'

function InfoPartida() {

    return (
        <>
            <div className="card-info">
                <h1>Datos de la Partida</h1>
                <div className="contador">
                    <h1 className='display-5 min'>02</h1>
                    <h1 className='display-5'>: </h1>
                    <h1 className='display-5 seg'>00</h1>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => {
                    comenzarJuego()
                }}>Iniciar juego</button>

                <h4>Aciertos Totales: <i className='num-aciertos'>0</i></h4>
                <h4>Aciertos Faltantes: <i className='num-faltantes'>10</i></h4>
            </div>
        </>
    )
}

export default InfoPartida