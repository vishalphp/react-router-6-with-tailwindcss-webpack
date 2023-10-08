import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Document from './pages/Document';

export default function Screens() {
  return (
    <Routes>
      <Route element={<RootLayout />} >
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/document' element={<Document />} />
      </Route>
    </Routes>
  )
}
