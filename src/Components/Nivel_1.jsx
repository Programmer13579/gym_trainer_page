import React, { useState, useEffect } from 'react'
import "../Styles/niveles.css"
import { Link } from 'react-router-dom';
import { prevImage, nextImage, scrollToSection } from './main'
import imagen1 from "../img/Alimentacion_1.jpg"
import imagen2 from "../img/Alimentacion_2.jpg"
import imagen3 from "../img/Alimentacion_3.jpg"
import imagen4 from "../img/Alimentacion_4.jpg"
import imagen5 from "../img/Alimentacion_5.jpg"
import imagen6 from "../img/Alimentacion_6.png"
import imagen7 from "../img/Alimentacion_7.png"
import imagen8 from "../img/Alimentacion_8.jpg"
import { FaDumbbell } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Nivel_1 = ({SECTION_NIVEL}) => {
    const images1 = [imagen1, imagen2, imagen3, imagen4, imagen8];
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
            <h2><FaDumbbell className='dumbbell'/>Alimentación<FaDumbbell className='dumbbell'/></h2>
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
                        <img src={imagen5} alt="" />
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
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen6} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>titulo</h5>
                        <br /><hr /><br />
                        <p>CALORÍA (cal) Es una unidad de energía; cantidad de calor necesario para elevar la temperatura de 1 gramo de agua en 1°C, (de 14,5 ºC a 15,5 ºC). También se la llamada "caloría-gramo" o "caloría pequeña". Una variante empleada en nutrición es sustituir la cantidad de agua referida por 1 kg. A esta variante basada en kilogramo se la llama "kilocaloría (kcal)" o "caloría grande". Caloría (Cal; con «C» mayúscula). Por lo tanto, 1 kilocaloría (kcal) = 1000 calorías (cal). . En nuestro día a día necesitamos un aporte continuo de ENERGÍA para: • llevar a cabo todas nuestras funciones vitales; cardíaca, nerviosa, digestiva, respiratoria, reproductiva, etc. • realizar trabajo muscular, desarrollando; actividad y ejercicio físico. • producir procesos biosintéticos relacionados con el crecimiento y reparación de tejidos. • mantener la temperatura corporal. Etc. La energía que necesitamos para poder llevar a cabo todo esto es suministrada por los alimentos que consumimos.</p>
                        <br />
                        <a href="https://www.instagram.com/p/CZkgea7pulp/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <div className='level_container'>
                <div className="datos">
                    <div className="imagen">
                        <img src={imagen7} alt="" />
                    </div>
                    <div className="info">
                        <hr /><br />
                        <h5>titulo</h5>
                        <br /><hr /><br />
                        <p>NUTRIENTES Son sustancias contenidas en alimentos. Los requeridos en grandes cantidades son llamados MACROnutrientes y los requeridos en cantidades pequeñas se les conoce como MICROnutrientes. MACRONUTRIENTES: Proporcionan energía al organismo. Además, sirven para reparar y construir estructuras, promover el crecimiento y regular procesos metabólicos. Este grupo está constituido por: • Proteínas • Grasas • Hidratos de Carbono MICRONUTRIENTES: Permiten el desarrollo de procesos metabólicos, previenen infecciones y contribuyen al crecimiento (son necesarios para el mantenimiento de la salud) y no producen energía como los macronutrientes. Aquí encontramos: • Vitaminas • Minerales</p>
                        <br />
                        <a href="https://www.instagram.com/p/CZAhwG2pQj8/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <Link className="button_level btn_next_level" to="/Movimiento">Movimiento</Link>
        </div>
    )
}

export default Nivel_1