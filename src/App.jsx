import React, { useRef, useState } from 'react';
import "./App.css"
import Header from "./Components/header"
import Main from "./Components/main"
import Footer from "./Components/footer"
import Nivel_1 from "./Components/Nivel_1"

function App() {

    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Nivel_1></Nivel_1>
            <Footer></Footer>
        </div>
    );
}

export default App;
