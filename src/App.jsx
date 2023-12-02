import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg' - need new logo?
// import viteLogo from '/vite.svg' - need new logo?
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
