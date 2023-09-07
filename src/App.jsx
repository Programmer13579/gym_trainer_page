import React, { useRef, useState } from 'react';
import "./App.css"
import Header from "./Components/header"
import Main from "./Components/main"
import Footer from "./Components/footer"

function App() {

    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
