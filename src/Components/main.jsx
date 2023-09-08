import React, {useState, useEffect} from 'react'
import "../Styles/main.css"
import imagen5 from '../img/imagen5.webp'
import imagen6 from '../img/imagen6.webp'
import imagen7 from '../img/imagen7.webp'

const main = () => {
    const images_1 = [imagen5, imagen6, imagen7];
    const [animation_1, setAnimation_1] = useState(0);
    const [timeInterval_1, setTimeInterval_1] = useState(15000);
    
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
            nextImage(5000, setTimeInterval_1, animation_1, setAnimation_1, images_1);
        }, timeInterval_1);
        return() => clearInterval(interval);
    });

    return (
        <div className='main'>
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
                <div className="containerBtn sliderbtnLeft" id='sliderbtnLeft' onClick={() => prevImage(5000, setTimeInterval_1, animation_1, setAnimation_1, images_1)}><p>&lt;</p></div>
                <div className="containerBtn sliderbtnRight" id='sliderbtnRight' onClick={() => nextImage(5000, setTimeInterval_1, animation_1, setAnimation_1, images_1)}><p>&gt;</p></div>
            </div>
        </div>
    )
}

export default main

