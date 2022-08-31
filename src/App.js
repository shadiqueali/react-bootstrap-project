import React from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/pages/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>  
              <Route path="/contact" element={<Contact/>}/>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
