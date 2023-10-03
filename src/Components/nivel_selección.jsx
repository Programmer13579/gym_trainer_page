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
                    <Link className="button_level btn_seleccion" to="nivel_1">Nivel 1</Link>
                    <Link className="button_level btn_seleccion" to="nivel_2">Nivel 2</Link>
                    <Link className="button_level btn_seleccion" to="nivel_3">Nivel 3</Link>
                    <Link className="button_level btn_seleccion" to="nivel_4">Nivel 4</Link>
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