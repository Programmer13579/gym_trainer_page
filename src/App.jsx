import React, { Suspense, lazy, useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Loading from './Components/Loading'
const Error404 = lazy(() => import('./Components/Error404'));
const Header = lazy(() => import('./Components/header'));
const Main = lazy(() => import('./Components/main'));
const Footer = lazy(() => import('./Components/footer'));
const NivelSeleccion = lazy(() => import('./Components/nivel_selección'));
const Nivel1 = lazy(() => import('./Components/Nivel_1'));
const Nivel2 = lazy(() => import('./Components/Nivel_2'));
const Nivel3 = lazy(() => import('./Components/Nivel_3'));
const Services = lazy(() => import('./Components/Services'));

function App() {
    const [contacto, setContacto] = useState(false);
    const SECTION_NIVEL = useRef(null);
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Header contacto = {contacto} setContacto = {setContacto}/>
                    <Main setContacto = {setContacto}/>
                    <Routes>
                        <Route path="/" element={<>
                            <Suspense fallback={<Loading/>}>
                                <NivelSeleccion/>
                            </Suspense>
                        </>}/>
                        <Route path="Alimentacion" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel1 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="Movimiento" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel2 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="Descanso" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel3 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="Servicios" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Services/>
                            </Suspense>
                        </>}/>
                        <Route path="*" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Error404/>
                            </Suspense>
                        </>}/>
                    </Routes>
                    <Footer/>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;