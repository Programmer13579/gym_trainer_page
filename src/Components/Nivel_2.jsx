import React, { useEffect } from 'react'
import "../Styles/niveles.css"
import { scrollToSection } from './main'
import imagen1 from "../img/Nivel-2_(1).png"
import imagen2 from "../img/Nivel-2_(2).png"
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';

const Nivel_2 = ({sectionNivel}) => {

    useEffect(() => {
        scrollToSection(sectionNivel)
    },[]);
    
    return (
        <div className="nivel_principal" ref={sectionNivel}>
            <h2>Nivel_2</h2>
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
                        <p>CALORÍA (cal) Es una unidad de energía; cantidad de calor necesario para elevar la temperatura de 1 gramo de agua en 1°C, (de 14,5 ºC a 15,5 ºC). También se la llamada "caloría-gramo" o "caloría pequeña". Una variante empleada en nutrición es sustituir la cantidad de agua referida por 1 kg. A esta variante basada en kilogramo se la llama "kilocaloría (kcal)" o "caloría grande". Caloría (Cal; con «C» mayúscula). Por lo tanto, 1 kilocaloría (kcal) = 1000 calorías (cal). . En nuestro día a día necesitamos un aporte continuo de ENERGÍA para: • llevar a cabo todas nuestras funciones vitales; cardíaca, nerviosa, digestiva, respiratoria, reproductiva, etc. • realizar trabajo muscular, desarrollando; actividad y ejercicio físico. • producir procesos biosintéticos relacionados con el crecimiento y reparación de tejidos. • mantener la temperatura corporal. Etc. La energía que necesitamos para poder llevar a cabo todo esto es suministrada por los alimentos que consumimos.</p>
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
                        <p>NEAT Por sus siglas en inglés de (Non-Exercise Activity Thermogenesis), es el gasto calórico no proveniente de hacer ejercicio, sino de la ACTIVIDAD FÍSICA realizada a diario. Es todo esfuerzo, más allá del gimnasio o el deporte que practiquemos, que requiera energía para llevarlo a cabo. Por ejemplo: _ Subir por las escaleras en vez de usar el ascensor. _ Bajar paradas antes al tomar un colectivo y caminar o, no tomar el colectivo e ir caminando o en bici a nuestro destino. _ Limpiar la casa más a menudo. _ Jugar con nuestro perro. _ Bailar con los niños de casa. _ Salir hacer las compras. _ Estar menos tiempo sentado. Todos ellos son pequeños cambios que pueden marcar la diferencia a la hora de perder peso, ya que nos ayudarán a mantener ese déficit calórico necesario para lograrlo.</p>
                        <br />
                        <a href="https://www.instagram.com/p/Cj62mUzuz4C/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>Ver en instagram</a>
                    </div>
                </div>
            </div>
            <Link className="button_nivel b_niveles" to="/nivel_3">Siguiente nivel</Link>
        </div>
    )
}

export default Nivel_2