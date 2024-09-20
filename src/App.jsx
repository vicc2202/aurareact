import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cremas from './components/Cremas/Cremas'
import Limpiadores from "./components/Limpiadores/Limpiadores"
import Serums from "./components/Serums/Serums"
import Tonicos from "./components/Tonicos/Tonicos"


const App = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/cremas' element="{<Cremas/>}"/>
                <Route path='/limpiadores' element="{<Limpiadores/>}"/>
                <Route path='/serums' element="{<Serums/>}"/>
                <Route path='/tonicos' element="{<Tonicos/>}"/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}></Route>
                <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
            </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App
