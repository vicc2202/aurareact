import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'


const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Productos"/>
    </>
  )
}

export default App
