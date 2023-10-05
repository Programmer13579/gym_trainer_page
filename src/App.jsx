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
const Nivel4 = lazy(() => import('./Components/Nivel_4'));

function App() {
    const [contacto, setContacto] = useState(false);
    const SECTION_NIVEL = useRef(null);
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Header contacto = {contacto} setContacto = {setContacto}/>
                    <Main/>
                    <Routes>
                        <Route path="/" element={<>
                            <Suspense fallback={<Loading/>}>
                                <NivelSeleccion/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_1" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel1 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_2" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel2 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_3" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel3 SECTION_NIVEL = {SECTION_NIVEL}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_4" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel4 SECTION_NIVEL = {SECTION_NIVEL}/>
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