import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../Styles/header.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFillTelephoneFill, BsTelephone } from 'react-icons/bs'
import { FaBars, FaTiktok } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai'
import { PiTiktokLogo } from 'react-icons/pi'
import { FaHandPointer } from 'react-icons/fa6'

import logo from '../img/SDN_logo_small.jpg'
import profileImg from '../img/borquez.jpeg'



const header= ({contacto, setContacto}) => {

    const [responsiveNav, setResponsiveNav] = useState(false)
    return (
        <>
            <nav className='nav'>
                <NavLink className={'navLink'} to="/">
                    <img src={logo} alt="logo" className='logoSmall'/>
                </NavLink>
                <FaBars className='bars' onClick={() => setResponsiveNav(true)}/>
                <div className={`navMenu ${responsiveNav? 'activeNavmenu' : ''}`}>
                    <AiOutlineClose className='Hicon_close closeNavmenu' onClick={() => setResponsiveNav(false)}/>
                    <NavLink className={'navLink'} to="/Servicios" activeStyle onClick={() => setResponsiveNav(false)}>
                        Servicios
                    </NavLink>
                    <p className={'navLink'} onClick={() => {setContacto(true); setResponsiveNav(false)}}>
                        Contactos
                    </p>
                    <p className={'navLink'} to="/sign-up" activeStyle>
                        Información
                        <ul>
                            <Link to="/Alimentacion" onClick={() => setResponsiveNav(false)}>Alimentacion</Link>
                            <Link to="/Movimiento" onClick={() => setResponsiveNav(false)}>Movimiento</Link>
                            <Link to="/Descanso" onClick={() => setResponsiveNav(false)}>Descanso</Link>
                        </ul>
                    </p>
                </div>
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
                        <li className='contactos'><a href="https://www.tiktok.com/@manumborquez" target='_blank' rel="noopener noreferrer" title="Tiktok"><FaTiktok  className='iconContact'/>@manumborquez</a></li>
                        {/* Redirigimos a un chat de WhatsApp de la empresa con un mensaje predeterminado */}
                        <li className='contactos'><a href="https://api.whatsapp.com/send?phone=3865-266434&text=Hola, estoy interesado en contratar tu servicio de entrenador personal" target='_blank' rel="noopener noreferrer"><IoLogoWhatsapp className='iconContact'/>WhatsApp</a></li>
                        {/* Redirigimos a la aplicación de telefono con el numero de la empresa ingresado para poder llamar o agregar el contacto */}
                        <li className='contactos'><a href="tel:+5493865-266434" target='_blank' rel="noopener noreferrer"><BsFillTelephoneFill className='iconContact'/>+54 9 3865-266434</a></li>
                        <li className='contactos'><a href="https://www.instagram.com/sdngym15/" target='_blank' rel="noopener noreferrer"><AiFillInstagram className='iconContact'/>@sdngym15</a></li>
                    </ul>

                    <div class="container_index">
                        <div class="profile">
                            <div class="profile-image">
                                <img src={profileImg} alt="Profile"/>
                            </div>
                            <ul class="social-icons">
                                <li>
                                    <a href="https://www.tiktok.com/@manumborquez" target='_blank' rel="noopener noreferrer" title="Tiktok">
                                        <PiTiktokLogo/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=3865-266434&text=Hola, estoy interesado en contratar tu servicio de entrenador personal" target='_blank' rel="noopener noreferrer" title="Whatsapp">
                                        <AiOutlineWhatsApp/>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+5493865-266434" target='_blank' rel="noopener noreferrer" title="Celular">
                                        <BsTelephone/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/sdngym15/" target='_blank' rel="noopener noreferrer" title="Instagram">
                                        <AiOutlineInstagram/>
                                    </a>
                                </li>
                            </ul>
                            <div class="profile-name">
                                <h2>Manuel Borquez</h2>
                                <div class="profile-bio">Entrenador personal. Estudiante de Educación Fisica. Estudiante de Kinesiologia.</div>
                            </div>
                            <h2 className='quien_soy'>¿Quien soy?<FaHandPointer/></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header