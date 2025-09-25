import { useState } from 'react'
// import ethmumbaiLogo from '/Icon _ On Brand Color.png?url'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Website from './pages/website';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Website/>}/>
          </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
