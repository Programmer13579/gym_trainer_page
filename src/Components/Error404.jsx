import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Error404.css'

const Error404 = () => {
    return (
        <div className='error_404'>
            <div className="container_error_404">
                <h3>404</h3>
                <h5>PÁGINA NO ENCONTRADA</h5>
                <p>Buscamos alto y bajo, pero no pudimos encontrar lo que estás buscando.<br/>Busquemos un mejor lugar para que vayas.</p>
                <Link className='error_link' to='/'>IR A INICIO</Link>
            </div>
        </div>
    )
}
export default Error404