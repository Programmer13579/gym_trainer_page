import React, { useEffect } from 'react'
import "../Styles/niveles.css"
import { scrollToSection } from './main'
import imagen1 from "../img/Movimiento_1.jpg"
import imagen2 from "../img/Movimiento_2.jpg"
import imagen3 from "../img/Movimiento_3.png"
import imagen4 from "../img/Movimiento_4.png"
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';

const Nivel_2 = ({SECTION_NIVEL}) => {

    useEffect(() => {
        scrollToSection(SECTION_NIVEL)
    },[]);
    
    return (
        <div className="level_principal" ref={SECTION_NIVEL}>
            <h2><FaDumbbell className='dumbbell'/>Movimiento<FaDumbbell className='dumbbell'/></h2>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen1} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>ACTIVIDAD Y EJERCICIO FÍSICO</h5>
                        <br /><hr /><br />
                        <p>Saber diferenciar la actividad física del ejercicio físico es el primer paso para sistematizar el movimiento.<br /><br />TAREA: Hacer un listado de tareas de movimiento, en el cuál colocaremos cuántos entrenamientos realizaremos a la semana. Por ejemplo: ir al gimnasio 3 veces veces por semana, ir a caminar 1 vez veces por semana y nadar 2 veces por semana.</p>
                        <br />
                        <a href="https://www.instagram.com/p/Cj62mUzuz4C/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen2} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>¿QUÉ QUIERO ENTRENAR?</h5>
                        <br /><hr /><br />
                        <p>Debemos conocer las capacidades físicas básicas para direccionar el entrenamiento dependiendo nuestros objetivos.<br /><br />TAREA: Dar dirección a nuestro entrenamiento es ser específicos a la capacidad a mejorar, por eso nos centraremos a estimular una de ellas a la vez. Vamos a proponernos un lapso de tiempo en meses para trabajarla. Por ejemplo: 2 meses (Cuando se cumpla el tiempo y nos adaptemos a él podemos sumar más capacidades).</p>
                        <br />
                        <a href="https://www.instagram.com/p/Cuimo_8OpDV/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen3} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>NEAT</h5>
                        <br /><hr /><br />
                        <p>Por sus siglas en inglés de (Non-Exercise Activity Thermogenesis), es el gasto calórico no proveniente de hacer ejercicio, sino de la ACTIVIDAD FÍSICA realizada a diario. Es todo esfuerzo, más allá del gimnasio o el deporte que practiquemos, que requiera energía para llevarlo a cabo. Por ejemplo: _ Subir por las escaleras en vez de usar el ascensor. _ Bajar paradas antes al tomar un colectivo y caminar o, no tomar el colectivo e ir caminando o en bici a nuestro destino. _ Limpiar la casa más a menudo. _ Jugar con nuestro perro. _ Bailar con los niños de casa. _ Salir hacer las compras. _ Estar menos tiempo sentado. Todos ellos son pequeños cambios que pueden marcar la diferencia a la hora de perder peso, ya que nos ayudarán a mantener ese déficit calórico necesario para lograrlo.</p>
                        <br />
                        <a href="https://www.instagram.com/p/CaI55wPp6Nt/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen4} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>TIPOS DE RUTINAS DE ENTRENAMIENTO </h5>
                        <br /><hr /><br />
                        <p>Estos son algunos ejemplos de cómo se puede organizar una rutina en el gimnasio: • Divididas por GRUPOS MUSCULARES. Se trabaja diferentes musculos en una misma sesion. Por ejm; . sesion 1 - pectorales, deltoides y tríceps / cuádriceps y pantorrillas. . sesión 2 - dorsales, trapecio y bíceps / Isquiosurales y glúteo. • Divididas por EJERCICIOS DE TORSO Y PIERNA. Se trabaja un conjunto de ejercicios para el tren superior (TS) en una sesión, y en la otra, ejercicios para el tren inferior (TI). Por ejm; . sesión 1 - Tren superior . sesión 2 - Tren inferior. • Divididas por PATRONES DE MOVIMIENTO. Se trabaja por sesión un patron de movimiento o conjunto de patrones. Por ejm; . sesión 1 - Empujes y Dominantes de rodilla . sesión 2 - Tracciones y Dominantes de cadera. • De CUERPO COMPLETO. Se trabaja en una misma sesión ejercicios para el TS y TI. Por ejm; . sesión 1, 2 y 3 - tren superior e inferior. • División MIXTA. Son combinaciones de las divisiones anteriores. por ejm; Rutina dividida por 'Ejercicios de torso y pierna' + rutina dividida por 'Patrones de movimiento' + rutina dividida por 'Grupos musculares' . sesión 1 - Tren Superior; Empujes, Tracciones, bíceps y triceps. . sesión 2 - Tren Inferior; Dominantes de rodilla, Dominantes de cadera y pantorrilas.</p>
                        <br />
                        <a href="https://www.instagram.com/p/CeL7E6juEiO/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <Link className="button_level btn_next_level" to="/Descanso">Descanso</Link>
        </div>
    )
}

export default Nivel_2