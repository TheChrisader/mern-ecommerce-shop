import "./Edit.scss";

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const Edit = () => {
  return (
    <div className="user-edit-wrapper">
      <h1 className="edit-title">Details</h1>
      <form action="submit" className="edit-details-wrapper">
        <label htmlFor="username" className="login-input-wrapper">
          <input
            type="text"
            className="login-input"
            id="username"
            placeholder=" "
          />
          <span className="login-input-label">Username</span>
        </label>
        <label htmlFor="email" className="login-input-wrapper">
          <input
            type="text"
            className="login-input"
            id="email"
            placeholder=" "
          />
          <span className="login-input-label">Email</span>
        </label>
        <label htmlFor="password" className="login-input-wrapper">
          <input
            type="password"
            className="login-input"
            id="password"
            placeholder=" "
          />
          <span className="login-input-label">Password</span>
        </label>
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Edit;
