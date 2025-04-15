import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import './App.css'
import { Home } from './pages/home'
import { Components } from './pages/Components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
