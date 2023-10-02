import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import RootLayout from './layout/RootLayout';

export default function Screens() {
  return (
    <Routes>
      <Route element={<RootLayout />} >
        <Route path='/' element={<Home />} /> 
      </Route>
    </Routes>
  )
}
