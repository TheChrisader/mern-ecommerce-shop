import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signOut } from "../../redux/apiCalls/userApiCalls";

import "./Sidebar.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <section className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">QUICK MENU</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <Link to="/" className="link sidebar-link">
                <i className="fa-solid fa-house sidebar-icon"></i>
                <span className="sidebar-item-name">Home</span>
              </Link>
            </ul>
            <ul className="sidebar-item">
              <Link to="/products" className="link sidebar-link">
                <i className="fa-solid fa-bag-shopping sidebar-icon"></i>
                <span className="sidebar-item-name">Products</span>
              </Link>
            </ul>
            <ul className="sidebar-item">
              <Link to="/users" className="link sidebar-link">
                <i className="fa-solid fa-users sidebar-icon"></i>
                <span className="sidebar-item-name">Users</span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">CREATE/EDIT</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <Link to="/product/new" className="link sidebar-link">
                <i className="fa-solid fa-circle-plus sidebar-icon"></i>
                <span className="sidebar-item-name">Product</span>
              </Link>
            </ul>
            <ul className="sidebar-item">
              <Link to="/user/new" className="link sidebar-link">
                <i className="fa-solid fa-circle-plus sidebar-icon"></i>
                <span className="sidebar-item-name">User</span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">ACCOUNT</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <Link to="/profile" className="link sidebar-link">
                <i className="fa-solid fa-id-card sidebar-icon"></i>
                <span className="sidebar-item-name">Profile</span>
              </Link>
            </ul>
            <ul className="sidebar-item">
              <Link to="/settings" className="link sidebar-link">
                <i className="fa-solid fa-gears sidebar-icon"></i>
                <span className="sidebar-item-name">Settings</span>
              </Link>
            </ul>
            <ul className="sidebar-item">
              <Link
                to="/login"
                className="link"
                onClick={() => signOut(dispatch)}
              >
                <span className="sidebar-item-name sidebar-sign-out">
                  Sign Out
                </span>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
