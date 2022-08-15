import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/apiCalls";
import { useIsMount } from "../../utils/hooks/useIsMount";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isMount = useIsMount();

  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.user.error);
  const isFetching = useSelector((state: any) => state.user.isFetching);

  useEffect(() => {
    if (isMount) {
      return;
    } else {
      console.log("first");
      setErrorMessage(error);
    }
  }, [error]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <span>{errorMessage}</span>
        {isFetching && <div className="login-loader"></div>}
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </main>
  );
};

export default Login;
