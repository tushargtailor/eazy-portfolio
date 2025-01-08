import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Work />
    <Contact />
    </div>
  )
}

export default App