import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'

export default function RootLayout() {
  return (
    <div className='twl-font-sans mainwrapper'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}
