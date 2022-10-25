import { useEffect, useState } from "react";

import "./Navbar.scss";

interface INavbar {
  setState: (state: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ setState }) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

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
          <i className="fa-solid fa-bell nav-icon"></i>
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
