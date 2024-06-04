import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import GetMovies from './GetMovies'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return ( 
    
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/getmov' element={<GetMovies/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
