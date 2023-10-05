import React, {useState, useEffect} from 'react'
import "../Styles/main.css"
import sliderImg1 from '../img/sliderImg1.jpeg'
import sliderImg2 from '../img/sliderImg2.jpg'
import sliderImg3 from '../img/sliderImg3.webp'
import sliderImg4 from '../img/sliderImg4.jpg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const nextImage = (p_time, p_setInterval, p_animation, p_setAnimation, p_images) => {
    p_setInterval(p_time)
    if(p_animation !== p_images.length - 1)
        p_setAnimation(p_animation + 1)
    else
        p_setAnimation(0)
}

export const prevImage = (p_time, p_setInterval, p_animation, p_setAnimation, p_images) => {
    p_setInterval(p_time)
    if(p_animation !== 0)
        p_setAnimation(p_animation - 1)
    else
        p_setAnimation(p_images.length - 1)
}

export const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
};

const main = ({setContacto}) => {
    const images_1 = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];
    const [animation1, setAnimation1] = useState(0);
    const [timeInterval1, setTimeInterval1] = useState(15000);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(15000, setTimeInterval1, animation1, setAnimation1, images_1);
        }, timeInterval1);
        return() => clearInterval(interval);
    });

    return (
        <main>
            <div className="container_slider_principal">
                <div className="slider_principal" id='sliderPrincipal'>
                    {images_1.length ? images_1.map((image, index) => (
                    // Creamos un div y le añadimos la clase card y el id del producto con product.id
                    <div className={`slider_section ${animation1 === index ? 'carrousel_active' : ''}`} key={'imageSlider' + index}>
                        <img src={image} alt="" className={'img_slider_principal'} />
                    </div>
                    )): (
                    <div className="slider_not_found">
                        <h1>"La Familia"<br/>Distribuidora</h1>
                    </div>
                    )}
                </div>
                {/* <div className="containerBtn sliderbtnLeft" id='sliderbtnLeft' onClick={() => prevImage(10000)}><FontAwesomeIcon icon={faAngleLeft} /></div>
                <div className="containerBtn sliderbtnRight" id='sliderbtnRight' onClick={() => nextImage(10000)}><FontAwesomeIcon icon={faAngleRight} /></div> */}
                <div className="container_btn slider_btn_left" id='sliderbtnLeft' onClick={() => prevImage(15000, setTimeInterval1, animation1, setAnimation1, images_1)}><IoIosArrowBack className='arrow_icon'/></div>
                <div className="container_btn slider_btn_right" id='sliderbtnRight' onClick={() => nextImage(15000, setTimeInterval1, animation1, setAnimation1, images_1)}><IoIosArrowForward className='arrow_icon'/></div>
                
                <div className="container_info_trainer">
                    <div className="info_trainer">
                        <p>Entrenador personal</p>
                        <h3>SDN GYM</h3>
                        <button onClick={() => setContacto(true)}>Contactame</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default main

