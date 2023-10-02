import React from 'react'
import "../Styles/nivel_selección.css"
import { Link } from 'react-router-dom';
import { LiaDumbbellSolid } from 'react-icons/lia';

const nivel_selección = () => {

    return (
        <div className='nivel_seleccion'>
            <div className='divIconSelector divIconSelectorLeft'>
                <LiaDumbbellSolid className='iconSelector'/>
            </div>
            <div className='divIconSelector divIconSelectorLeft'>
                <LiaDumbbellSolid className='iconSelector'/>
            </div>
            <div>
                <h2>Selecciona un nivel</h2>
                <div className="button_seleccion">
                    <Link className="button_nivel b_seleccion" to="nivel_1">Nivel 1</Link>
                    <Link className="button_nivel b_seleccion" to="nivel_2">Nivel 2</Link>
                    <Link className="button_nivel b_seleccion" to="nivel_3">Nivel 3</Link>
                    <Link className="button_nivel b_seleccion" to="nivel_4">Nivel 4</Link>
                </div>
            </div>
            <div className='divIconSelector'>
                <LiaDumbbellSolid className='iconSelector'/>
            </div>
            <div className='divIconSelector'>
                <LiaDumbbellSolid className='iconSelector'/>
            </div>
        </div>
    )
}

export default nivel_selección