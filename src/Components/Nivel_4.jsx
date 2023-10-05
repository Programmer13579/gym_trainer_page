import React, { useState, useEffect } from 'react'
import "../Styles/niveles.css"
import { prevImage, nextImage, scrollToSection } from './main'
import imagen1 from "../img/Nivel-1_(1).jpg"
import imagen2 from "../img/Nivel-1_(2).jpg"
import imagen3 from "../img/Nivel-1_(3).jpg"
import imagen4 from "../img/Nivel-1_(4).jpg"
import imagen5 from "../img/Nivel-1_(5).jpg"
import imagen6 from "../img/Nivel-1_(6).jpg"
import imagen7 from "../img/Nivel-1_(7).jpg"
import imagen8 from "../img/Nivel-1_(8).jpg"
import imagen9 from "../img/Nivel-1_(9).jpg"
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Nivel_4 = ({SECTION_NIVEL}) => {
    const images1 = [imagen1, imagen6, imagen7, imagen8, imagen9];
    const [animation1, setAnimation1] = useState(0);
    const [timeInterval1, setTimeInterval1] = useState(10000);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(10000, setTimeInterval1, animation1, setAnimation1, images1);
        }, timeInterval1);
        return() => clearInterval(interval);
    });

    useEffect(() => {
        scrollToSection(SECTION_NIVEL)
    },[]);

    return (
        <div className="level_principal" ref={SECTION_NIVEL}>
            <h2>NIVEL 4</h2>
            <hr />
            <h3><FaDumbbell className='dumbbell'/>Alimentación<FaDumbbell className='dumbbell'/></h3>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen level_slider">
                        <div className="container_slider_principal">
                            <div className="slider_principal" id='slider_principal'>
                                {images1.length ? images1.map((image, index) => (
                                    <div className={`slider_section ${animation1 === index ? 'carrousel_active' : ''}`} key={'imageSlider' + index}>
                                        <img src={image} alt="" className={'img_slider_principal'} />
                                    </div>
                                )): (
                                    <div className="slider_not_found">
                                        <h5>Error al cargar las imagenes</h5>
                                    </div>
                                )}
                            </div>
                            <div className="container_btn slider_btn_left" id='sliderbtnLeft' onClick={() => prevImage(15000, setTimeInterval1, animation1, setAnimation1, images1)}><IoIosArrowBack className='arrow_icon'/></div>
                            <div className="container_btn slider_btn_right" id='sliderbtnRight' onClick={() => nextImage(15000, setTimeInterval1, animation1, setAnimation1, images1)}><IoIosArrowForward className='arrow_icon'/></div>
                        </div>
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>CLASIFICACIÓN DE LOS ALIMENTOS</h5>
                        <br /><hr /><br />
                        <p>El primer paso y el más significativo a la hora de mejorar nuestra alimentación es saber clasificar los alimentos.<br /><br />TAREA: Tu alimentación tendría que basarse en un 80% o más de alimentos reales o mínimamente procesados, mientras que el 20% o menos, del total de alimentos consumidos a diario, pueden ser procesasos. A los ultaprocesados intentaremos eliminarlos por completo.</p>
                        <br />
                        <a href="https://www.instagram.com/p/CrM0-NXuTN5/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
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
                        <h5>NO POLARIZAR</h5>
                        <br /><hr /><br />
                        <p>En lo que respecta a la alimentación y entrenamiento no debemos pensar en blanco o negro, sino en grises, porque los buenos caminos no se encuentran en los extremos.<br /><br />TAREA: Incluir ese 20% o menos de alimentos procesados o ultraprocesados en las situaciones que lo ameriten.</p>
                        <br />
                        <a href="https://www.instagram.com/p/Ctz6LnkJcPh/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <h3><FaDumbbell className='dumbbell'/>Movimiento<FaDumbbell className='dumbbell'/></h3>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen3} alt="" />
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
                        <img src={imagen4} alt="" />
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
            <h3><FaDumbbell className='dumbbell'/>Descanso<FaDumbbell className='dumbbell'/></h3>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen5} alt="" />
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

export default Nivel_4