import React from 'react'
import data from './images'
import "./PlayerExp.css"

const PlayerExp = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Equipo</th>
                    <th>Año</th>
                </tr>

                {data.map((image) => (
                    <th>
                        <td>
                            <img src={image.src} alt={image.alt} className="imageCard" /> 
                        </td>
                    </th>


                ))}

                {data.map((image) => (
                    <tr>
                        <td>
                            <p className='flex text-end'>{image.alt}</p>
                        </td>
                    </tr>


                ))}

            </tbody>
        </table>


    )
}

export default PlayerExp