import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ciounter from './conter'
import Dashboard from './dashboard'
import Login from './modul/login/index'

const Routess = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/home' element={<Ciounter />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </BrowserRouter>
  );
};

export default Routess
