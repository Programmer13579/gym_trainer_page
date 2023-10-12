import React from 'react'
import "../Styles/nivel_selección.css"
import { Link } from 'react-router-dom';
import { LiaDumbbellSolid } from 'react-icons/lia';

const nivel_selección = () => {

    return (
        <div className='level_seleccion'>
            <div className='div_icon_selector div_icon_selector_left'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
            <div className='div_icon_selector div_icon_selector_left'>
                <LiaDumbbellSolid className='icon_selector'/>
            </div>
            <div>
                <h2>Selecciona un nivel</h2>
                <div className="button_seleccion">
                    <Link className="button_level btn_seleccion" to="nivel_1">Alimentacion</Link>
                    <Link className="button_level btn_seleccion" to="nivel_2">Movimiento</Link>
                    <Link className="button_level btn_seleccion" to="nivel_3">Descanso</Link>
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