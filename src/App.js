import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'
import Success from './pages/success'
import NavBar from './components/navBar'
import './styles/style.css'

const App = () =>{
  return(
    
    <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/success/:name' element={<Success/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App