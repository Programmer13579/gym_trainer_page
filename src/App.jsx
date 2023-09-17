import React, { Suspense, lazy, useRef } from 'react';
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
    const sectionNivel = useRef(null);
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Header/>
                    <Main sectionNivel = {sectionNivel}/>
                    <Routes>
                        <Route path="/" element={<>
                            <Suspense fallback={<Loading/>}>
                                <NivelSeleccion sectionNivel = {sectionNivel}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_1" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel1 sectionNivel = {sectionNivel}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_2" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel2 sectionNivel = {sectionNivel}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_3" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel3 sectionNivel = {sectionNivel}/>
                            </Suspense>
                        </>}/>
                        <Route path="nivel_4" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Nivel4 sectionNivel = {sectionNivel}/>
                            </Suspense>
                        </>}/>
                        <Route path="*" element={<>
                            <Suspense fallback={<Loading/>}>
                                <Error404 sectionNivel = {sectionNivel}/>
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