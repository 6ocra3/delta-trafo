import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './atomic/pages/LoginPage'
import { MainTemplate } from './atomic/templates/MainTemplate'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
    <div className='body'>
    <Router>
      <Routes>
        <Route path='/main/*' element={<MainTemplate/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
    </div>
    </Provider>
  )
}

export default App
