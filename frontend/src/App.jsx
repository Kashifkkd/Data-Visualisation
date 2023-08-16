import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ContactUs from './pages/ContactUs'
import Account from './pages/Account'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/account' element={<Account />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
