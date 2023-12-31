import React, { useRef } from 'react'
import "../Styles/footer.css"
import {FaFacebook} from 'react-icons/fa';    
import {BsInstagram} from 'react-icons/bs';     
import {BiLogoGmail} from 'react-icons/bi';   
import {BsWhatsapp} from 'react-icons/bs';
import { useScrollEffect } from './AnimatedElement'

const footer = () => {
    
    // const element_1 = useRef(null);
    // const element_2 = useRef(null);
    const element_3 = useRef(null);
    const element_4 = useRef(null);
    const element_5 = useRef(null);
    const element_6 = useRef(null);
    const element_7 = useRef(null);
    const element_8 = useRef(null);
    const element_9 = useRef(null);

    // Llama a la función de efecto reutilizable
    // useScrollEffect(element_1);
    // useScrollEffect(element_2);
    useScrollEffect(element_3);
    useScrollEffect(element_4);
    useScrollEffect(element_5);
    useScrollEffect(element_6);
    useScrollEffect(element_7);
    useScrollEffect(element_8);
    useScrollEffect(element_9);
    return (
        <footer className="footer">
           {/* <div className="footer-left col-md-4 col-sm-6">
                <h3 className='desaparecer' ref={element_1}>¿Quien soy?</h3>
                <p className="about desaparecer" ref={element_2}>
                  Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                  ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
    </div>  */}
     <div className="footer-right col-md-4 col-sm-6">
                <center><h2 className='desaparecer' ref={element_7}><span>SDN</span> GYM</h2></center>
                <div className="icons desaparecer" ref={element_8}>
                    <center>
                        <a href="https://www.facebook.com/manuel.borquez.9638?locale=es_LA"><FaFacebook/></a>
                        <a href="https://www.instagram.com/sdngym15/"><BsInstagram/></a>
                        <a href="mailto:manumborquez@gmail.com"><BiLogoGmail /></a>
                        <a href="https://wa.me/+5493865266434"><BsWhatsapp/></a>
                    </center>
                </div>
                <center> <p className="name desaparecer" ref={element_9}><span> Developed by | Ligth & Soft &copy; 2023  |</span></p> </center>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <h3 className='desaparecer' ref={element_3}>Contactame</h3>
                <p className='desaparecer' ref={element_4}>Aguilares, Tucuman</p>
                <p className='desaparecer' ref={element_5}><a href="tel:+5493865-266434" target='_blank' rel="noopener noreferrer">(+54 9) 3865-266434</a></p>
                <p className='desaparecer' ref={element_6}> manumborquez@gmail.com</p>
            </div>
           
        </footer>
    )
}

export default footer
