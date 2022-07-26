import React from 'react'
import './App.css'
import Home from './Pages/Home/Home';
import Experience from './Pages/Experience/Experience'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>   
        <Router>
            <Routes>
              <Route exact path = '/' element = {<Home/>}/>
              <Route path = '/experience' element = {<Experience/>}/>
            </Routes>
        </Router>  
    </div>
  )
}

export default App