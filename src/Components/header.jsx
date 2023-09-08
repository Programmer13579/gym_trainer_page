import React from 'react'
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from '../Styles/header.js'

const header= () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About                   
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services                 
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact                   
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign up                
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default header