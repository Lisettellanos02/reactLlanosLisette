import "./navbar.css";
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
                        <Link className="nav-link" to="/category/lisos">Lisos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/estampados">Estampados</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Pantalones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                    </li>
                    {/* CartWidget*/}
                    <div>carrito</div>
            </ul>
        </nav>
    );
}