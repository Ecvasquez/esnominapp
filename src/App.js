import React from 'react'

import { Routes, Route} from "react-router-dom"
import { Applications } from './pages/Applications'
import { Login } from './pages/Login'
import { Olvido } from './pages/Olvido'
import {Home } from './pages/Home'


export const App = () => {
    return (
            <Routes>
              <Route path="/" element={<Home />} />      
              <Route path="/login" element={<Login />} />
              <Route path="/olvido" element={<Olvido />} />
              <Route
              path="/app/*"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Applications />
                </React.Suspense>
              }
            />  
          </Routes>    
    )
}


