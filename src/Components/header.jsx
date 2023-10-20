import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/header.css'
import { FaLocationDot } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFillTelephoneFill, BsInstagram, BsTelephone } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { PiTiktokLogo } from 'react-icons/pi'
import logo from '../img/SDN_logo_small.jpg'
import profileImg from '../img/borquez.png'



const header= ({contacto, setContacto}) => {
    return (
        <>
            <nav className='nav'>
                <NavLink className={'navLink'} to="/">
                    <img src={logo} alt="logo" className='logoSmall'/>
                </NavLink>
                <FaBars className='bars'/>
                <div className='navMenu'>
                    <NavLink className={'navLink'} to="/about" activeStyle>
                        About                   
                    </NavLink>
                    <NavLink className={'navLink'} to="/services" activeStyle>
                        Services                 
                    </NavLink>
                    <NavLink className={'navLink'} to="/contact" activeStyle onClick={() => setContacto(true)}>
                        Contact                   
                    </NavLink>
                    <NavLink className={'navLink'} to="/sign-up" activeStyle>
                        Sign up                
                    </NavLink>
                </div>
                <nav className='navBtn'>
                    <NavLink className={'navBtnLink'} to="/signin">Sign in</NavLink>
                </nav>
            </nav>

            {/* Formulario de contacto */}
            {/* Se comprueba si contacto es true. En caso de cumplirse la condicion se asigna la clase para mostrar el formulario de contacto. */}
            <div className={`containerInfoContact ${contacto? 'activecontainerInfoContact' : ''}`}>
                <div className={`infoContact ${contacto? 'activeinfoContact' : ''}`}>
                    {/* Este svg es la X y al precionarla cierra el formulario de contacto. */}
                    <AiOutlineClose className='Hicon_close' onClick={() => setContacto(false)}/>
                    
                    <div className="titleContact">
                        <img src={logo} alt="logo" className='logoSmallContact'/>
                        <h6>"SDN GYM" - Contactos</h6>
                    </div>

                    <ul className='contactanos'>
                        {/* Redirigimos a la ubicacion de la empresa en google maps */}
                        <li className='contactos'><a href="https://www.google.com.gt/maps/place/La+Oferta/@-27.3477648,-65.5910017,18z/data=!4m10!1m2!2m1!1sla+oferta!3m6!1s0x9423cf5c99bfe997:0x1e14071c27ac474d!8m2!3d-27.3466769!4d-65.5894634!15sCglsYSBvZmVydGFaCyIJbGEgb2ZlcnRhkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11b7xmqvg8?entry=ttu" target='_blank' rel="noopener noreferrer"><FaLocationDot className='iconContact'/>Buenos Aires 60, Concepción, Tucumán, Argentina.</a></li>
                        {/* Redirigimos a un chat de WhatsApp de la empresa con un mensaje predeterminado */}
                        <li className='contactos'><a href="https://api.whatsapp.com/send?phone=3865-266434&text=Hola, estoy interesado en contratar tu servicio de entrenador personal" target='_blank' rel="noopener noreferrer"><IoLogoWhatsapp className='iconContact'/>WhatsApp</a></li>
                        {/* Redirigimos a la aplicación de telefono con el numero de la empresa ingresado para poder llamar o agregar el contacto */}
                        <li className='contactos'><a href="tel:+5493865-266434" target='_blank' rel="noopener noreferrer"><BsFillTelephoneFill className='iconContact'/>+54 9 3865-266434</a></li>
                        <li className='contactos'><a href="https://www.instagram.com/sdngym15/" target='_blank' rel="noopener noreferrer"><BsInstagram className='iconContact'/>@sdngym15</a></li>
                    </ul>

                    <div class="container_index">
                        <div class="profile">
                            <div class="profile-image">
                                <img src={profileImg} alt="Profile"/>
                            </div>
                            <ul class="social-icons">
                                <li>
                                    <a href="https://www.instagram.com/sdngym15/" target='_blank' rel="noopener noreferrer" title="Instagram">
                                        <AiOutlineInstagram/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=3865-266434&text=Hola, estoy interesado en contratar tu servicio de entrenador personal" target='_blank' rel="noopener noreferrer" title="Whatsapp">
                                        <AiOutlineWhatsApp/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Tiktok" title="Tiktok">
                                        <PiTiktokLogo/>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+5493865-266434" target='_blank' rel="noopener noreferrer" title="Celular">
                                        <BsTelephone/>
                                    </a>
                                </li>
                            </ul>
                            <div class="profile-name">
                                <h2>Manuel Borquez</h2>
                                <div class="profile-bio">Entrenador personal. Estudiante de Educación Fisica. Estudiante de Kinesiologia.</div>
                            </div>
                            <h2 className='quien_soy'>¿Quien soy?</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header