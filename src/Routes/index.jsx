import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./home"
import About from "./About.jsx"
// import Navbar from "./navabar.jsx"
import Footer from "./footer.jsx"

export default function App(){
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/navabar" element={<Navbar />} /> */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
)
}

