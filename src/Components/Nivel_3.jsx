import React, { useEffect } from 'react'
import "../Styles/niveles.css"
import { scrollToSection } from './main'
import imagen1 from "../img/Nivel-3_(1).png"
import imagen2 from "../img/Nivel-3_(2).png"
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';

const Nivel_3 = ({sectionNivel}) => {

    useEffect(() => {
        scrollToSection(sectionNivel)
    },[]);

    return (
        <div className="nivel_principal" ref={sectionNivel}>
            <h2>NIVEL 3</h2>
            <hr />
            <h3><FaDumbbell className='dumbbell'/>Alimentación<FaDumbbell className='dumbbell'/></h3>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen1} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>titulo</h5>
                        <br /><hr /><br />
                        <p>NUTRIENTES Son sustancias contenidas en alimentos. Los requeridos en grandes cantidades son llamados MACROnutrientes y los requeridos en cantidades pequeñas se les conoce como MICROnutrientes. MACRONUTRIENTES: Proporcionan energía al organismo. Además, sirven para reparar y construir estructuras, promover el crecimiento y regular procesos metabólicos. Este grupo está constituido por: • Proteínas • Grasas • Hidratos de Carbono MICRONUTRIENTES: Permiten el desarrollo de procesos metabólicos, previenen infecciones y contribuyen al crecimiento (son necesarios para el mantenimiento de la salud) y no producen energía como los macronutrientes. Aquí encontramos: • Vitaminas • Minerales</p>
                        <br />
                        <a href="https://www.instagram.com/p/Ctz6LnkJcPh/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <h3><FaDumbbell className='dumbbell'/>Movimiento<FaDumbbell className='dumbbell'/></h3>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen2} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>titulo</h5>
                        <br /><hr /><br />
                        <p>TIPOS DE RUTINAS DE ENTRENAMIENTO Estos son algunos ejemplos de cómo se puede organizar una rutina en el gimnasio: • Divididas por GRUPOS MUSCULARES. Se trabaja diferentes musculos en una misma sesion. Por ejm; . sesion 1 - pectorales, deltoides y tríceps / cuádriceps y pantorrillas. . sesión 2 - dorsales, trapecio y bíceps / Isquiosurales y glúteo. • Divididas por EJERCICIOS DE TORSO Y PIERNA. Se trabaja un conjunto de ejercicios para el tren superior (TS) en una sesión, y en la otra, ejercicios para el tren inferior (TI). Por ejm; . sesión 1 - Tren superior . sesión 2 - Tren inferior. • Divididas por PATRONES DE MOVIMIENTO. Se trabaja por sesión un patron de movimiento o conjunto de patrones. Por ejm; . sesión 1 - Empujes y Dominantes de rodilla . sesión 2 - Tracciones y Dominantes de cadera. • De CUERPO COMPLETO. Se trabaja en una misma sesión ejercicios para el TS y TI. Por ejm; . sesión 1, 2 y 3 - tren superior e inferior. • División MIXTA. Son combinaciones de las divisiones anteriores. por ejm; Rutina dividida por 'Ejercicios de torso y pierna' + rutina dividida por 'Patrones de movimiento' + rutina dividida por 'Grupos musculares' . sesión 1 - Tren Superior; Empujes, Tracciones, bíceps y triceps. . sesión 2 - Tren Inferior; Dominantes de rodilla, Dominantes de cadera y pantorrilas.</p>
                        <br />
                        <a href="https://www.instagram.com/p/Cj62mUzuz4C/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <Link className="button_nivel b_niveles" to="/nivel_4">Siguiente nivel</Link>
        </div>
    )
}

export default Nivel_3