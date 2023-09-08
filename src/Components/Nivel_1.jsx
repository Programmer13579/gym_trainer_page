import React from 'react'
import "../Styles/niveles.css"
import imagen1 from "../img/Nivel-1_(1).jpg"

const Nivel_1 = () => {
    return (
        <div className="container">
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen1} alt="" />
                    </div>
                    <div className="info">
                        <h2>CLASIFICACIÓN DE LOS ALIMENTOS</h2>
                        <p>El primer paso y el más significativo a la hora de mejorar nuestra alimentación es saber clasificar los alimentos. TAREA: Tu alimentación tendría que basarse en un 80% o más de alimentos reales o mínimamente procesados, mientras que el 20% o menos, del total de alimentos consumidos a diario, pueden ser procesasos. A los ultaprocesados intentaremos eliminarlos por completo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nivel_1