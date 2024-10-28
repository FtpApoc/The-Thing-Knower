import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Menu from './components/menu/Menu'
import Content from './components/content/Structure'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Content' element={<Content />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </Router>
  )
}

export default App
