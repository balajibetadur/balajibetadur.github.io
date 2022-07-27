import React from 'react'
import './App.css'
import Home from './Pages/Home/Home';
import Experience from './Pages/Experience/Experience'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>   
        <Router>
          <NavBar/>
            <Routes>
              <Route exact path = '/' element = {<Home/>}/>
              <Route path = '/experience' element = {<Experience/>}/>
            </Routes>
            <Footer/>
        </Router>  
    </div>
  )
}

export default App