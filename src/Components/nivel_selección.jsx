import React, { useEffect, useState, useRef }from 'react'
import { Link } from 'react-router-dom';
import "../Styles/nivel_selección.css"
import { LiaDumbbellSolid } from 'react-icons/lia';
import { checkAndAnimateOnLoad, useScrollEffect } from './AnimatedElement'

const nivel_selección = () => {

    const element_1 = useRef(null);
    const element_2 = useRef(null);
    const element_3 = useRef(null);
    const element_4 = useRef(null);

    const [animateOnLoad] = useState(false);
    // Llama a la función para verificar y animar en el momento del render
    useEffect(() => {
        checkAndAnimateOnLoad(element_1);
        checkAndAnimateOnLoad(element_2);
        checkAndAnimateOnLoad(element_3);
        checkAndAnimateOnLoad(element_4);
    }, [animateOnLoad]);

    // Llama a la función de efecto reutilizable
    useScrollEffect(element_1);
    useScrollEffect(element_2);
    useScrollEffect(element_3);
    useScrollEffect(element_4);
    return (
        <div className='level_seleccion'>
            <div className='div_icon_selector div_icon_selector_left'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
            <div className='div_icon_selector div_icon_selector_left'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
            <div>
                <h2 className='desaparecer' ref={element_1}>Información Nutricional</h2>
                    
                <div className="button_seleccion">
                    <Link className="button_level btn_seleccion desaparecer" to="Alimentacion" ref={element_2} >Alimentacion</Link>
                    <Link className="button_level btn_seleccion desaparecer" to="Movimiento" ref={element_3}>Movimiento</Link>
                    <Link className="button_level btn_seleccion desaparecer" to="Descanso" ref={element_4}>Descanso</Link>
                    {/* <Link className="button_level btn_seleccion" to="nivel_4">Avanzado</Link> */}
                </div>
            </div>
            <div className='div_icon_selector'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
            <div className='div_icon_selector'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
        </div>
    )
}

export default nivel_selección