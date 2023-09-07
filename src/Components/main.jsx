import React, {useState, useEffect} from 'react'
import "../Styles/main.css"
import imagen5 from '../img/imagen5.webp'
import imagen6 from '../img/imagen6.webp'
import imagen7 from '../img/imagen7.webp'

const main = () => {
    const images = [imagen5, imagen6, imagen7];
    const [animation, setAnimation] = useState(0);
    const [timeInterval, setTimeInterval] = useState(15000);
  
    function nextImage(time){
        setTimeInterval(time)
        if(animation !== images.length - 1)
            setAnimation(animation + 1)
        else
            setAnimation(0)
    }
    
    function prevImage(time){
        setTimeInterval(time)
        if(animation !== 0)
            setAnimation(animation - 1)
        else
            setAnimation(images.length - 1)
    }
  
  
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(15000);
        }, timeInterval);
        return() => clearInterval(interval);
    });

    return (
        <div className='main'>
            <div className="containerSliderPrincipal">
                <div className="sliderPrincipal" id='sliderPrincipal'>
                    {images.length ? images.map((image, index) => (
                    // Creamos un div y le añadimos la clase card y el id del producto con product.id
                    <div className={`sliderSection ${animation === index ? 'carrouselActive' : ''}`} key={'imageSlider' + index}>
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
                <div className="containerBtn sliderbtnLeft" id='sliderbtnLeft' onClick={() => prevImage(10000)}><p>&lt;</p></div>
                <div className="containerBtn sliderbtnRight" id='sliderbtnRight' onClick={() => nextImage(10000)}><p>&gt;</p></div>
            </div>
        </div>
    )
}

export default main

