import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'

import Navegacion from './Nav/Navegacion'
import { Outlet } from 'react-router-dom'

function App() {

  const [usuario, setUsuario] = useState(null);
  const [recarga, setRecarga] = useState(false)
  const [examen, setExamen] = useState(null)

  return (
    <>
      <Navegacion usuario={usuario} recarga={recarga} setRecarga={setRecarga} />
      <Outlet context={[usuario, setUsuario, examen, setExamen, recarga, setRecarga]} />
    </>
  )
}

export default App
