import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Accueil from './page/Accueil'
import NousContacter from './page/NousContacter'
import Login from './page/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/** il s'agit du router */}
      <Routes> 
        <Route  path='/' element={<App />} >
          <Route index element={<Accueil />} />
          <Route path="contacter" element={<NousContacter />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      {/** fin il s'agit du router */}
    </BrowserRouter>
  </React.StrictMode>
)