import React, { useState, useEffect } from 'react'
import "../Styles/niveles.css"
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

const Nivel_1 = () => {
    const images_1 = [imagen1, imagen6, imagen7, imagen8, imagen9];
    const [animation_1, setAnimation_1] = useState(0);
    const [timeInterval_1, setTimeInterval_1] = useState(10000);
    
    function nextImage(p_time, p_setInterval, p_animation, p_setAnimation, p_images){
        p_setInterval(p_time)
        if(p_animation !== p_images.length - 1)
            p_setAnimation(p_animation + 1)
        else
            p_setAnimation(0)
    }
    
    function prevImage(p_time, p_setInterval, p_animation, p_setAnimation, p_images){
        p_setInterval(p_time)
        if(p_animation !== 0)
            p_setAnimation(p_animation - 1)
        else
            p_setAnimation(p_images.length - 1)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(10000, setTimeInterval_1, animation_1, setAnimation_1, images_1);
        }, timeInterval_1);
        return() => clearInterval(interval);
    });
    return (
        <div className="nivel_principal">
            <h2>NIVEL 4</h2>
            <hr />
            <h3>Alimentación</h3>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen nivelSlider">
                        <div className="containerSliderPrincipal">
                            <div className="sliderPrincipal" id='sliderPrincipal'>
                                {images_1.length ? images_1.map((image, index) => (
                                // Creamos un div y le añadimos la clase card y el id del producto con product.id
                                    <div className={`sliderSection ${animation_1 === index ? 'carrouselActive' : ''}`} key={'imageSlider' + index}>
                                        <img src={image} alt="" className={'imgSliderPrincipal'} />
                                    </div>
                                    )): (
                                    <div className="sliderNotFound">
                                        <h1>"La Familia"<br/>Distribuidora</h1>
                                    </div>
                                    )}
                            </div>
                            {/* <div className="containerBtn sliderbtnLeft" id='sliderbtnLeft' onClick={() => prevImage(10000)}><FontAwesomeIcon icon={faAngleLeft} /></div>
                            <div className="containerBtn sliderbtnRight" id='sliderbtnRight' onClick={() => nextImage(10000)}><FontAwesomeIcon icon={faAngleRight} /></div> */}
                            <div className="containerBtn sliderbtnLeft" id='sliderbtnLeft' onClick={() => prevImage(10000, setTimeInterval_1, animation_1, setAnimation_1, images_1)}><p>&lt;</p></div>
                            <div className="containerBtn sliderbtnRight" id='sliderbtnRight' onClick={() => nextImage(10000, setTimeInterval_1, animation_1, setAnimation_1, images_1)}><p>&gt;</p></div>
                        </div>
                    </div>
                    <div className="info">
                        <h2>CLASIFICACIÓN DE LOS ALIMENTOS</h2>
                        <br />
                        <p>El primer paso y el más significativo a la hora de mejorar nuestra alimentación es saber clasificar los alimentos.<br /><br />TAREA: Tu alimentación tendría que basarse en un 80% o más de alimentos reales o mínimamente procesados, mientras que el 20% o menos, del total de alimentos consumidos a diario, pueden ser procesasos. A los ultaprocesados intentaremos eliminarlos por completo.</p>
                    </div>
                </div>
            </div>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen2} alt="" />
                    </div>
                    <div className="info">
                        <h2>NO POLARIZAR</h2>
                        <br />
                        <p>En lo que respecta a la alimentación y entrenamiento no debemos pensar en blanco o negro, sino en grises, porque los buenos caminos no se encuentran en los extremos.<br /><br />TAREA: Incluir ese 20% o menos de alimentos procesados o ultraprocesados en las situaciones que lo ameriten.</p>
                    </div>
                </div>
            </div>
            <h3>Movimiento</h3>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen3} alt="" />
                    </div>
                    <div className="info">
                        <h2>ACTIVIDAD Y EJERCICIO FÍSICO</h2>
                        <br />
                        <p>Saber diferenciar la actividad física del ejercicio físico es el primer paso para sistematizar el movimiento.<br /><br />TAREA: Hacer un listado de tareas de movimiento, en el cuál colocaremos cuántos entrenamientos realizaremos a la semana. Por ejemplo: ir al gimnasio 3 veces veces por semana, ir a caminar 1 vez veces por semana y nadar 2 veces por semana.</p>
                    </div>
                </div>
            </div>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen4} alt="" />
                    </div>
                    <div className="info">
                        <h2>¿QUÉ QUIERO ENTRENAR?</h2>
                        <br />
                        <p>Debemos conocer las capacidades físicas básicas para direccionar el entrenamiento dependiendo nuestros objetivos.<br /><br />TAREA: Dar dirección a nuestro entrenamiento es ser específicos a la capacidad a mejorar, por eso nos centraremos a estimular una de ellas a la vez. Vamos a proponernos un lapso de tiempo en meses para trabajarla. Por ejemplo: 2 meses (Cuando se cumpla el tiempo y nos adaptemos a él podemos sumar más capacidades).</p>
                    </div>
                </div>
            </div>
            <h3>Descanso</h3>
            <div className='nivelContainer'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen5} alt="" />
                    </div>
                    <div className="info">
                        <h2>LA IMPORTANCIA DEL DESCANSO</h2>
                        <br />
                        <p>Hay que darle la importancia que se merece al descanso. Existe una relación inversamente proporcional entre la cantidad de estrés y de descanso que debemos respetar.<br /><br />TAREA: Programar los días de descanso relacionandolos con los días de entrenamiento. Por ejemplo, si un lunes tengo un día cargado de movimiento (ir al gimnasio y entrenar mi deporte) el martes podría descansar en inactividad o simplemente salir a caminar (descanso activo).</p>
                    </div>
                </div>
            </div>
            <Link className="button_nivel b_niveles" to="/">Volver al inicio</Link>
        </div>
    )
}

export default Nivel_1