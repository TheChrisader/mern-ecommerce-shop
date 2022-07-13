import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">QUICK MENU</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <i className="fa-solid fa-house sidebar-icon"></i>
              <span className="sidebar-item-name">Dashboard</span>
            </ul>
            <ul className="sidebar-item">
              <i className="fa-solid fa-bag-shopping sidebar-icon"></i>
              <span className="sidebar-item-name">Products</span>
            </ul>
            <ul className="sidebar-item">
              <i className="fa-solid fa-users sidebar-icon"></i>
              <span className="sidebar-item-name">Users</span>
            </ul>
          </nav>
        </div>
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">CREATE/EDIT</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <i className="fa-solid fa-circle-plus sidebar-icon"></i>
              <span className="sidebar-item-name">Product</span>
            </ul>
            <ul className="sidebar-item">
              <i className="fa-solid fa-circle-plus sidebar-icon"></i>
              <span className="sidebar-item-name">User</span>
            </ul>
          </nav>
        </div>
        <div className="sidebar-menu-group">
          <h2 className="sidebar-title">ACCOUNT</h2>
          <nav className="sidebar-nav">
            <ul className="sidebar-item">
              <i className="fa-solid fa-id-card sidebar-icon"></i>
              <span className="sidebar-item-name">Profile</span>
            </ul>
            <ul className="sidebar-item">
              <i className="fa-solid fa-gears sidebar-icon"></i>
              <span className="sidebar-item-name">Settings</span>
            </ul>
            <ul className="sidebar-item">
              <span className="sidebar-item-name sidebar-sign-out">
                Sign Out
              </span>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
