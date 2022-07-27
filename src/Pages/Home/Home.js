import React from 'react'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Waves from '../../Components/Waves/Waves'


function Home() {
  return (
    <div className='Home'>
        <Landing/>
        <Waves/>  
        <About/>
    </div>
  )
}

export default Home