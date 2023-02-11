import React from 'react'
import "./Qualification.css"
import { useState } from 'react';

const Qualification = () => {

    const [mostrarPrimeraFila, setMostrarPrimeraFila] = useState(true);


    return (

        <>
            <section className='qualification section'>
                <h2 className='section__title'>
                    Trayectoria
                </h2>
                <span className='section__subtitle'>
                    Historial
                </span>

                <div className='qualification__container container'>
                    <div className='qualification__tabs'>
                        <div className="qualification__button qualification__active button--flex">
                            <i className='uil uil-graduation-cap   qualification__icon '></i> Jugador
                        </div>

                        <div className="qualification__button qualification__active button--flex">
                            <i className='uil uil-briefcase-alt qualification__icon '></i> Director Tecnico
                        </div>
                    </div>
                </div>






                <div>
                    {mostrarPrimeraFila ? (
                        <div className="fila">
                            <h2>Título de la fila 1</h2>
                            <p>Fecha de la fila 1</p>
                            <img src="ruta-de-la-imagen-1" alt="Imagen de la fila 1" />
                        </div>
                    ) : (
                        <div className="fila">
                            <h2>Título de la fila 2</h2>
                            <p>Fecha de la fila 2</p>
                            <img src="ruta-de-la-imagen-2" alt="Imagen de la fila 2" />
                        </div>
                    )}
                    <button onClick={() => setMostrarPrimeraFila(!mostrarPrimeraFila)}>
                        Mostrar/Ocultar filas
                    </button>
                </div>
                </section>
            </>




            )
}

            export default Qualification