import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.scss";

interface INavbar {
  setState: (state: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ setState }) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const orders = useSelector((state: any) => state.order.orders);

  const unprocessedOrders = orders.filter(
    (order: any) => order.status === "Not Processed"
  );

  const changeNav = () => {
    window.scrollY >= 20 ? setHasScrolled(true) : setHasScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  return (
    <nav className={`navbar-wrapper ${hasScrolled && `navbar-wrapper-blur`}`}>
      <h1 className="nav-header">ShopLite</h1>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="link order-notification" to="/orders">
            <div className="order-notification-number">
              {unprocessedOrders.length}
            </div>
            <i className="fa-solid fa-bell nav-icon"></i>
          </Link>
        </li>
        <li className="nav-list-item">
          <button className="sidebar-button" onClick={() => setState(false)}>
            <i className="fa-solid fa-bars nav-icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
