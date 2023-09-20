import React from 'react'
import "../Styles/nivel_selección.css"
import { Link } from 'react-router-dom';

const nivel_selección = ({sectionNivel}) => {
    const scrollToSection = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView();
        }
    };
    
    return (
        <div className='nivel_seleccion'>
            <h2>Selecciona un nivel</h2>
            <div className="button_seleccion">
                <Link className="button_nivel b_seleccion" to="nivel_1" onClick={() => scrollToSection(sectionNivel)}>Nivel 1</Link>
                <Link className="button_nivel b_seleccion" to="nivel_2" onClick={() => scrollToSection(sectionNivel)}>Nivel 2</Link>
                <Link className="button_nivel b_seleccion" to="nivel_3" onClick={() => scrollToSection(sectionNivel)}>Nivel 3</Link>
                <Link className="button_nivel b_seleccion" to="nivel_4" onClick={() => scrollToSection(sectionNivel)}>Nivel 4</Link>
            </div>
        </div>
    )
}

export default nivel_selección