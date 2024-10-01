import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import Menu from './components/menu'
import Example from './components/Example'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Example' element={<Example />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </Router>
  )
}

export default App
