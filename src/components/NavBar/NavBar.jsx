import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <header>
        <h1>AURA</h1>
        <nav>
            <ul>
                <li>CREMAS</li>
                <li>LIMPIADORES</li>
                <li>SERUMS</li>
                <li>TÓNICOS</li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar