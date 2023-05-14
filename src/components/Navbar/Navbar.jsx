import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">RadioHub</h1>
        </Link>
        <Link className="seeFavorites" to={"/favorites"}>
        &#8258;
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
