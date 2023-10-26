import React, {useState, useEffect} from 'react'
import "../Styles/main.css"
import sliderImg1 from '../img/sliderImg1.jpg'
import sliderImg2 from '../img/sliderImg2.jpg'
import sliderImg3 from '../img/sliderImg3.jpg'
import sliderImg4 from '../img/sliderImg4.jpg'
import sliderImg5 from '../img/sliderImg5.jpg'
import sliderImg6 from '../img/sliderImg6.webp'
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
    const images_1 = [sliderImg1, sliderImg3, sliderImg2, sliderImg4, sliderImg5, sliderImg6];
    const [animation1, setAnimation1] = useState(0);
    const [timeInterval1, setTimeInterval1] = useState(15000);
    const [activeButton, setActiveButton] = useState(true);

    const sliderTextAnimation = () => {
        setActiveButton(false)
        document.getElementById('slider_text').classList.remove('slider_text_animation_animation');
        document.getElementById('slider_text_2').classList.remove('slider_text_animation_animation');
        document.getElementById('slider_text_3').classList.remove('slider_text_animation_animation');
        setTimeout(function(){
            document.getElementById('slider_text').classList.add('slider_text_animation_animation');
            document.getElementById('slider_text_2').classList.add('slider_text_animation_animation');
            document.getElementById('slider_text_3').classList.add('slider_text_animation_animation');
        }, 200)
        setTimeout(function(){
            setActiveButton(true)
        }, 900)
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(15000, setTimeInterval1, animation1, setAnimation1, images_1);
            sliderTextAnimation();
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
                <button className="container_btn slider_btn_left" id='sliderbtnLeft' disabled={!activeButton} onClick={() => {prevImage(15000, setTimeInterval1, animation1, setAnimation1, images_1); sliderTextAnimation();}}><IoIosArrowBack className='arrow_icon'/></button>
                <button className="container_btn slider_btn_right" id='sliderbtnRight' disabled={!activeButton} onClick={() => {nextImage(15000, setTimeInterval1, animation1, setAnimation1, images_1); sliderTextAnimation();}}><IoIosArrowForward className='arrow_icon'/></button>
                
                <div className="container_info_trainer">
                    <div className="info_trainer">
                        <p className='slider_text_animation slider_text_animation_animation' id='slider_text'>Entrenador personal</p>
                        <h3 className='slider_text_animation slider_text_animation_animation' id='slider_text_2'>SDN <span>GYM</span></h3>
                        <button className='slider_text_animation slider_text_animation_animation' id='slider_text_3' onClick={() => setContacto(true)}>Contactame</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default main
