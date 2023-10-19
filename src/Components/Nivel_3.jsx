import React, { useEffect } from 'react'
import "../Styles/niveles.css"
import { scrollToSection } from './main'
import imagen1 from "../img/Descanso_1.jpg"
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';

const Nivel_3 = ({SECTION_NIVEL}) => {

    useEffect(() => {
        scrollToSection(SECTION_NIVEL)
    },[]);

    return (
        <div className="level_principal" ref={SECTION_NIVEL}>
            <h2><FaDumbbell className='dumbbell'/>Descanso<FaDumbbell className='dumbbell'/></h2>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen1} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>LA IMPORTANCIA DEL DESCANSO</h5>
                        <br /><hr /><br />
                        <p>Hay que darle la importancia que se merece al descanso. Existe una relación inversamente proporcional entre la cantidad de estrés y de descanso que debemos respetar.<br /><br />TAREA: Programar los días de descanso relacionandolos con los días de entrenamiento. Por ejemplo, si un lunes tengo un día cargado de movimiento (ir al gimnasio y entrenar mi deporte) el martes podría descansar en inactividad o simplemente salir a caminar (descanso activo).</p>
                        <br />
                        <a href="https://www.instagram.com/p/CvGX2lOpOrA/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <Link className="button_level btn_next_level" to="/">Volver al inicio</Link>
        </div>
    )
}

export default Nivel_3