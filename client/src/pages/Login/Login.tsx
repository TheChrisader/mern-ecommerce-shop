import { Link } from "react-router-dom";

import "./Login.scss";

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const Login: React.FC = () => {
  return (
    <>
      <h1 className="login-title">Log into your Account</h1>
      <form action="submit" className="login-form">
        <label htmlFor="username" className="login-input-wrapper">
          <input
            type="text"
            className="login-input"
            id="username"
            placeholder=" "
          />
          <span className="login-input-label">Username</span>
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

        <span className="forgot-password">Lost your password?</span>
      </form>
      <Link to="/register" className="link link-padding">
        <button type="submit" className="alt-button">
          Register
        </button>
      </Link>
    </>
  );
};

export default Login;
