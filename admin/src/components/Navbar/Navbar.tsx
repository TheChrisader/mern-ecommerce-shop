import { useEffect, useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const changeNav = () => {
    window.scrollY >= 20 ? setHasScrolled(true) : setHasScrolled(false);
    console.log(hasScrolled);
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
