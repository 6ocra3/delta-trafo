import './App.css'
import { LoginPage } from './atomic/pages/LoginPage'
import { MainTemplate } from './atomic/templates/MainTemplate'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
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
            {/* Редирект на /login для всех неизвестных маршрутов */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
