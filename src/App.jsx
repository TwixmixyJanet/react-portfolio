// import { useState } from 'react' - is this still needed?
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg' - need new logo?
// import viteLogo from '/vite.svg' - need new logo?
import MyNav from './components/Navigation/MyNav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <MyNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
