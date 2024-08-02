import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './atomic/pages/LoginPage'
import { MainTemplate } from './atomic/templates/MainTemplate'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='body'>
    <Router>
      <Routes>
        <Route path='/main/*' element={<MainTemplate/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
