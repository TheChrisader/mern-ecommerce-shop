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
        <span className="nav-title">ShopLite.</span>
      </div>
      <div className="icons-wrapper">
        <div className="icons">
          <i className="icon fa-solid fa-magnifying-glass"></i>
          <i className="icon fa-solid fa-heart"></i>
          <div className="cart">
            <div className="cart-number">9+</div>
            <i className="icon fa-solid fa-cart-shopping"></i>
          </div>
          <div className="icon login">Login</div>
        </div>
        <div className="right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
