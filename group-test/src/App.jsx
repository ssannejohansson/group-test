import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Home from './components/Home.jsx'
import LoginSignup from './components/LoginSignup.jsx'

import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
        </BrowserRouter>
  )
}

export default App;
