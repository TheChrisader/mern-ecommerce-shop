import axios from "axios";
import { useState } from "react";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    try {
      const res = await axios.post("/auth/login", data);
      console.log(res.data);
      // window.location.replace("/")
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <main className="login-wrapper">
      <form action="submit" onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="login-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Log In
        </button>
        <span>{error}</span>
      </form>
    </main>
  );
};

export default Login;
