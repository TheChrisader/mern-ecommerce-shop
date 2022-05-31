import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="hamburger">
          <div>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
        <span className="nav-title">
          <Link to="/" className="link">
            ShopLite.
          </Link>
        </span>
      </div>
      <div className="icons-wrapper">
        <div className="icons">
          <i className="icon fa-solid fa-magnifying-glass"></i>
          <i className="icon fa-solid fa-heart"></i>
          <div className="cart">
            <div className="cart-number">9+</div>
            <i className="icon fa-solid fa-cart-shopping"></i>
          </div>
          <div className="icon login">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
