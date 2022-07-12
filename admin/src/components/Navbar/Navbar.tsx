import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <h1 className="nav-header">ShopLite</h1>
      <ul className="nav-list">
        <li className="nav-list-item">
          <i className="fa-solid fa-bell nav-icon"></i>
        </li>
        <li className="nav-list-item">
          <i className="fa-solid fa-gear nav-icon"></i>
        </li>
        <li className="nav-list-item">
          <div className="nav-account-image"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
