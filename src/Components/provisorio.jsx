import React from 'react'
import profileImg from '../img/borquez.png'
import './style.css'

const provisorio = () => {
    return (
        <div class="container_index">
            <div class="profile-wrapper">
                <div class="profile">
                    <div class="profile-image">
                        <img src={profileImg} alt="Profile"/>
                    </div>
                    <ul class="social-icons">
                        <li>
                            <a href="https://www.instagram.com/sdngym15/" title="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                     stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#twitter" title="Twitter">
                                
                            </a>
                        </li>
                        <li>
                            <a href="#threads" title="Threads">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                                     fill="none" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7
                                            -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 
                                            3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                    >
                                    </path>
                                 </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedin" title="Linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z">
                                    </path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                 </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="profile-name">
                        <h2>Manuel Borquez</h2>
                        <div class="profile-bio">Entrenador personal. Estudiante de Educación Fisica. Estudiante de Kinesiologia.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default provisorio
