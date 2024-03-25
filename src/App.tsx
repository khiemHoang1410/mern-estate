import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { About, Home, Profile, SignIn, SignOut } from './pages'
import { NavBar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;