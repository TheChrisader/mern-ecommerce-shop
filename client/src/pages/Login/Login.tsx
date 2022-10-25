import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/ApiCalls";

import "./Login.scss";
import { useIsMount } from "../../utils/hooks/useIsMount";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isMount = useIsMount();

  const dispatch = useDispatch();

  const loginError = useSelector((state: any) => state.user.error);

  useEffect(() => {
    if (isMount) {
      return;
    } else {
      setErrorMessage(loginError);
    }
  }, [loginError]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    if (username === "" || password === "")
      return setErrorMessage("Please input both username and password");
    const data = {
      username,
      password,
    };

    await login(dispatch, data);
  };

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
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="login-input-label">Username</span>
        </label>
        <label htmlFor="password" className="login-input-wrapper">
          <input
            type="password"
            className="login-input"
            id="password"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="login-input-label">Password</span>
        </label>
        {loginError && <span className="input-error">{errorMessage}</span>}
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Log in
        </button>

        <span className="forgot-password">Lost your password?</span>
      </form>
      <Link to="/register" className="link link-padding">
        <button type="submit" className="alt-button">
          Don't have an account? Sign up instead.
        </button>
      </Link>
    </>
  );
};

export default Login;
