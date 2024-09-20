import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <h1 className="aura">AURA</h1>
      </Link>
        <nav>
            <ul>
              <NavLink to="categoria/cremas">
              <li>Cremas</li>
              </NavLink>
              <NavLink to="/categoria/limpiadores">
              <li>Limpiadores</li>
              </NavLink>
              <NavLink to="categoria/serums">
              <li>Serums</li>
              </NavLink>
              <NavLink to="categoria/tonicos">
              <li>Tónicos</li>
              </NavLink>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar