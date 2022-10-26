import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../../redux/ApiCalls";

import "./Register.scss";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword)
        throw new Error("Please input the correct password");
      let data = {
        username,
        email,
        password,
      };
      await register(dispatch, data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="register-title">Register For An Account</h1>
      <form action="submit" className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="username"
            placeholder=" "
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <span className="register-input-label">Username</span>
        </label>
        <label htmlFor="email" className="register-input-wrapper">
          <input
            type="text"
            className="register-input"
            id="email"
            placeholder=" "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className="register-input-label">Email</span>
        </label>
        <label htmlFor="password" className="register-input-wrapper">
          <input
            type="password"
            className="register-input"
            id="password"
            placeholder=" "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="register-input-label">Password</span>
        </label>
        <label htmlFor="confirm-password" className="register-input-wrapper">
          <input
            type="password"
            className="register-input"
            id="confirm-password"
            placeholder=" "
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <span className="register-input-label">Confirm Password</span>
        </label>
        <button type="submit" className="register-button">
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
