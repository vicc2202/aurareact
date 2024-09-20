import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      <Link to="/" className="aura">
      <h1>AURA</h1>
      </Link>
        <nav>
            <ul>
              <NavLink to="categoria/cremas" className="link">
              <li>Cremas</li>
              </NavLink>
              <NavLink to="/categoria/limpiadores" className="link">
              <li>Limpiadores</li>
              </NavLink>
              <NavLink to="categoria/serums" className="link">
              <li>Serums</li>
              </NavLink>
              <NavLink to="categoria/tonicos" className="link">
              <li>Tónicos</li>
              </NavLink>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar