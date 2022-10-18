import logo from "../../assets/imgs/logo.jpg"
import CartWidget from "../CartWidget"
import "./NavBar.css"

function NavBar() {
  return ( 
    <>
      <nav className="containerNavBar container-fluid bg-dark d-flex text-white align-items-center">
        <div className="containerLogo mt-1 w-25" >
          <a className="navbar-brand d-flex align-items-baseline navbarLogo">
            <img className="logo" src={logo} alt="Logo"></img>
            <h1 className="titleLogo text-white my-3">DISTRIBUIDORA DROM</h1>
          </a>
        </div>
        <div className="container">
          <ul className="list-unstyled d-flex justify-content-between navbar-bar w-50 m-auto">
            <li className="nav-link text-decoration-none text-reset">Escolar</li>
            <li className="nav-link text-decoration-none text-reset">Comercial</li>
            <li className="nav-link text-decoration-none text-reset">Papelera</li>
          </ul>
        </div>
        <CartWidget cant="0" />
      </nav>
      <div className="mt-5 pt-4 container-fluid ">
        <strong><a className="mt-5 text-decoration-none text-dark" to="/"> HOME</a> | xxxxxx </strong>
      </div>
    </>
  );
};

export default NavBar;

