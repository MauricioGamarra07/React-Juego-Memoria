import React, { useEffect, useState } from 'react'
import imagen from '../images/rickandmorty-removebg-preview.png'

function InfoPartida() {

    const [count, setCount] = useState(120)
    const [minutos, setMinutos] = useState('02')
    const [segundos, setSegundos] = useState('00')

    const contador = setTimeout(() => {
        disminuirContador(count)
    }, 1000);

    function disminuirContador(num) {
        let division = parseFloat((num / 60).toFixed(2));
        let min = Math.floor(division);
        setMinutos(agregarCeros(min))
        let seg = Math.round((division - min) * 60);
        setSegundos(agregarCeros(seg))
        setCount(num - 1);
    }

    const agregarCeros = n => {
        if (n.toString().length < 2) return "0".concat(n);
        return n;
    }

    if (count == -1) {
        clearTimeout(contador)
        /* console.log("Se acabó el tiempo") */
    }


    return (
        <>
            <div className="card-info">
                <h1>Datos de la Partida</h1>
                <div className="contador">
                    <h1 className='display-5'>{minutos}: </h1>
                    <h1 className='display-5'>{segundos}</h1>
                </div>

                <button type="button" className="btn btn-primary">Iniciar juego</button>

                <h4>Aciertos Totales: <i className='num-aciertos'>0</i></h4>
                <h4>Aciertos Faltantes: <i className='num-faltantes'>10</i></h4>
            </div>
        </>
    )
}

export default InfoPartida