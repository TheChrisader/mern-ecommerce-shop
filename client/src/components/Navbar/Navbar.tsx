import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = () => {
  const user = useSelector((state: any) => state.user.currentUser);
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
          <Link to="/products" className="link navbar-icon-link">
            <i className="icon fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
            to={"/user/" + user._id + "/saved"}
            className="link navbar-icon-link"
          >
            <i className="icon fa-solid fa-heart"></i>
          </Link>
          <Link to={"/cart/" + user._id} className="link navbar-icon-link">
            <div className="cart">
              <div className="cart-number">9+</div>
              <i className="icon fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
          {user ? (
            <Link to={"/user/" + user._id} className="nav-user link">
              <div className="nav-user-profile"></div>
            </Link>
          ) : (
            <div className="icon login">
              <Link to="/login" className="link">
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
