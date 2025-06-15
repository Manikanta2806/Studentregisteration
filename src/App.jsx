import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navigation from'./Navigation/Navigation'
import Home from './Home/Home'
import Coursetypes from './Coursetypes/Coursetypes'
import Courses from './Courses/Courses'
import Studentregistration from './Registration/Studentregistration'
import Courseoffering from './Courseofferings/Courseoffering'

function App() {
     return (
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coursetype" element={<Coursetypes/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/registration" element={<Studentregistration/>}/>
      <Route path="/Courseoffering" element={<Courseoffering/>}/>
      </Routes>
      </BrowserRouter>
      

     )
}

export default App
