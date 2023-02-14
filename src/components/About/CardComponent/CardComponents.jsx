import React from 'react'
import "./Card.css"

const CardComponents = () => {
    return (
        <div class="card">
            <img src="imagen.jpg" alt="Imagen"/>
                <div className="card-text">
                    <h2>Título de la tarjeta</h2>
                    <p>Texto de la tarjeta que describe la imagen y/o da más detalles sobre el contenido.</p>
                </div>
        </div>

    )
}

export default CardComponents