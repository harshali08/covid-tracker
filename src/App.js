import React from 'react'
import { Route,Routes ,BrowserRouter} from 'react-router-dom'
import Statewise from './components/Statewise'
import './App.css'
import Home from './components/Home'
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/state' element={<Statewise></Statewise>}></Route>
   

      
      
     
    </Routes>
      
    </BrowserRouter>
  )
}

export default App