import React from 'react'
import "../Styles/footer.css"
import {FaFacebook} from 'react-icons/fa';    
import {BsInstagram} from 'react-icons/bs';     
import {BiLogoGmail} from 'react-icons/bi';   
import {BsWhatsapp} from 'react-icons/bs';                                                         
import {BsYoutube} from 'react-icons/bs';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <h3>¿Quien soy?</h3>
                <p className="about">
                  Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                  ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <h3>Contactame</h3>
                <p>Aguilares, Tucuman</p>
                <p>(+54) 3865-266434</p>
                <p><a href="#"> manumborquez@gmail.com</a></p>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <center><h2>SDN GYM</h2></center>
                <div className="icons">
                    <center>
                        <a href="https://www.facebook.com/manuel.borquez.9638?locale=es_LA"><FaFacebook/></a>
                        <a href="https://www.instagram.com/sdngym15/"><BsInstagram/></a>
                        <a href="#"><BiLogoGmail /></a>
                        <a href="https://wa.me/+5493865266434"><BsWhatsapp/></a>
                        <a href="#"><BsYoutube/></a>
                    </center>
                </div>
                <center> <p className="name"><span> Developed by | Ligth & Soft &copy; 2023  |</span></p> </center>
            </div>
        </footer>
    )
}

export default footer
