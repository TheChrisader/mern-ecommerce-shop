import { Link } from "react-router-dom";

import "./Register.scss";

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const Register: React.FC = () => {
  return (
    <>
      <h1 className="register-title">Log into your Account</h1>
      <form action="submit" className="register-form">
        <label htmlFor="first-name" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="first-name"
            placeholder=" "
          />
          <span className="register-input-label">First Name</span>
        </label>
        <label htmlFor="last-name" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="last-name"
            placeholder=" "
          />
          <span className="register-input-label">Last Name</span>
        </label>
        <label htmlFor="username" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="username"
            placeholder=" "
          />
          <span className="register-input-label">Username</span>
        </label>
        <label htmlFor="email" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="email"
            placeholder=" "
          />
          <span className="register-input-label">Email</span>
        </label>
        <label htmlFor="password" className="register-input-wrapper">
          <input
            type="password"
            className="register-input"
            id="password"
            placeholder=" "
          />
          <span className="register-input-label">Password</span>
        </label>
        <label htmlFor="confirm-password" className="register-input-wrapper">
          <input
            type="password"
            className="register-input"
            id="confirm-password"
            placeholder=" "
          />
          <span className="register-input-label">Confirm Password</span>
        </label>
        <button
          type="submit"
          className="register-button"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <Link to="/login" className="link link-padding">
        <button type="button" className="alt-button">
          Log in
        </button>
      </Link>
    </>
  );
};

export default Register;
