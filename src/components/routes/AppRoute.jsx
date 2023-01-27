import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Aptitudes from '../pages/components/Aptitudes'
import Educacion from '../pages/components/Educacion'
import Experiencia from '../pages/components/Experiencia'
import Inicio from '../pages/components/Inicio'
import Proyectos from '../pages/components/Proyectos'
import Home from '../pages/Home'


const AppRoute = () => {

  return (

    <div>

      <BrowserRouter>   
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/inicio" element={<Inicio />}></Route>
          <Route exact path="/educacion" element={<Educacion />}></Route>
          <Route exact path="/experiencia" element={<Experiencia />}></Route>
          <Route exact path="/proyectos" element={<Proyectos />}></Route>
          <Route exact path="/aptitudes" element={<Aptitudes />}></Route>
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default AppRoute;