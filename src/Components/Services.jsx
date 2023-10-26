import React from 'react'
import "../Styles/services.css"
import natacion2 from '../img/natacion2.jpeg'
import cbum from "../img/cbum.jpeg"
import kineciologia2 from "../img/kinesiologia2.webp"
import airelibre3 from '../img/airelibre3.jpeg'



const Services = () => {
    return (
        <> 
            <section className="services-section spad">
                <div className="services-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>¿Qué hacemos?</span>
                                <h2>SUPERA TUS LIMITES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 col-md-6 p-0">
                            <div className="ss-pic">

                                <img src={cbum} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
                            <div className="ss-text">
                                <div>
                                    <h4>Personal training gimnasio</h4>
                                    <p>. Aumento de masa muscular</p>   
                                    <p>   . Quema de grasa</p>
                                    <p>  . Mejora de salud</p>
                                    <a href="#">Contactame</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-3 col-md-6 p-0">
                            <div className="ss-pic">

                                <img src={airelibre3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-4 col-md-6 p-0">
                            <div className="ss-text">
                                <div>
                                    <h4>Entrenamiento al aire libre</h4>
                                    <p>.    Reduccion de estres</p>
                                    <p>.    Mayor exposicion a la vitaminda D</p>
                                    <p>.    Mayor motivacion</p>
                                    <a href="#">Contactame</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-8 col-md-6 p-0">
                            <div className="ss-pic">

                                <img src={natacion2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-7 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <div>
                                    <h4>Natación</h4>
                                    <p>. Acondicionamiento cardiovascular</p>
                                    <p>. Desarrollo de la fuerza y resistencia muscular</p>
                                    <p>. Flexibilidad y movilidad</p>
                                    <a href="#">Contactame</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-6 col-md-6 p-0">
                            <div className="ss-pic">

                                <img src={kineciologia2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-5 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <div>
                                    <h4>Kinesiologia</h4>
                                    <p>. Prevencion de lesiones</p>
                                    <p>. Rehabilitacion</p>
                                    <p>. Apoyo de renimiento deportivo</p>
                                    <a href="#">Contactame</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services