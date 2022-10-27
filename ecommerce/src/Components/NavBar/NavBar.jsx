import logo from "../../assets/imgs/logo.jpg"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <nav className="containerNavBar container-fluid bg-dark d-flex text-white align-items-center">
        <div className="containerLogo mt-1 w-25" >
          <Link to="/" className=" navbar-brand d-flex align-items-baseline navbarLogo">
            <img className="logo" src={logo} alt="Logo"></img>
            <h1 className="titleLogo text-white my-3">DISTRIBUIDORA DROM</h1>
          </Link>
        </div>
        <div className="container">
          <ul className="list-unstyled d-flex justify-content-between navbar-bar w-50 m-auto">
            <Link to="/category/Escolar" className="nav-link text-decoration-none text-reset">Escolar</Link>
            <Link to="/category/Comercial" className="nav-link text-decoration-none text-reset">Comercial</Link>
            <Link to="/category/Papelera" className="nav-link text-decoration-none text-reset">Papelera</Link>
          </ul>
        </div>
        <CartWidget cant="0" />
      </nav>
      <div className="mt-5 pt-4 container-fluid ">
        <strong><Link className="mt-5 text-decoration-none text-dark" to="/"> HOME</Link> | xxxxxx </strong>
      </div>
    </>
  );
};

export default NavBar;

