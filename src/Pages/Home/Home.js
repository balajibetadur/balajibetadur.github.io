import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Waves from '../../Components/Waves/Waves'

function Home() {
  return (
    <div className='Home'>
        <Waves/>  
        <NavBar/>
        <Landing/>
        <About/>
    </div>
  )
}

export default Home