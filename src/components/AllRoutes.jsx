import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { All } from './All'
import { Css } from './Css'
import { Html } from './Html'
import { JavaScripts } from './JavaScripts'
import { Language } from './Language'
import { Navbar } from './Navbar'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/html' element={<Html/>} />
        <Route path='/css' element={<Css/>} />
        <Route path='/javascripts' element={<JavaScripts/>} />
    </Routes>
  )
}
