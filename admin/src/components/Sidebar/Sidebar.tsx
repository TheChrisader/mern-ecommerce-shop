import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-wrapper">
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="sidebar-nav">
          <ul className="sidebar-item">
            <span className="sidebar-item-name">Home</span>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
