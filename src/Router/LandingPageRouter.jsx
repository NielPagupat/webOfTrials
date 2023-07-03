import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Album from '../Pages/AboutPage'
import SignInSide from '../Pages/LoginPage'
import UIStuff from '../Pages/UIStuff'
import ComponentStuff from '../Pages/ComponentStuff'
export default function LandingPageRouter() {
  return (
        <Routes>
            <Route path='/' element={<Album />}/>
            <Route path='/login' element={<SignInSide />}/>
            <Route path='/UIStuffs' element={<UIStuff />}/>
            <Route path='/CompStuffs' element={<ComponentStuff />}/>
        </Routes> 
  )
}
