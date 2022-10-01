import React from 'react'
import Formulario from '../Formulario/Formulario'
import "./FormInfo.css"

const FormInfo = () => {
    return (
        <div className="card text-bg-dark Forminfo">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay">
                <div className='infoContainer'>
                    <h5 className="card-title">¡Contáctanos!</h5>
                    <p className="card-text card-info">¡ Haz tu reservación para que te podamos llamar e informarte de la disponibilidad que tenemos !</p>
                    <br />
                    <p class="card-text">Te esperamos en Avenida siempreviva #2022, Cd de México, México. CP 00110</p>
                </div>
                <Formulario />
            </div>
        </div>

    )
}

export default FormInfo