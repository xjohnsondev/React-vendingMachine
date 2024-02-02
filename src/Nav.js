import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div className="navBar">
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/PotatoChip">Potato Chip</NavLink>
            <NavLink className="navLink" to="/Poptart">Poptart</NavLink>
            <NavLink className="navLink" to="/Pretzel">Pretzel</NavLink>
        </div>
    )
}

export default Nav;