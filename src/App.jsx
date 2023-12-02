// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import MyNav from './components/Navigation/MyNav';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Portfolio from './components/Portfolio/Portfolio';
// import Resume from './components/Resume/Resume';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
        <MyNav />
        <main >
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App;
