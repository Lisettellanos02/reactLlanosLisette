//import "./navbar.css";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <Link to="/">miTienda</Link>
                    </li>
                </h2>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Pantalones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Cofias</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Pantalones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prueba">Accesorios</Link>
                    </li>
                    {/* CartWidget*/}
                    <div>carrito</div>
            </ul>
        </nav>
    );
}