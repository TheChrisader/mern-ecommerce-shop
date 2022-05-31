import "./Login.scss";

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const Login: React.FC = () => {
  return (
    <>
      <h1 className="account-title">Log into your Account</h1>
      <form action="submit" className="login-form">
        <label htmlFor="username" className="login-input-wrapper">
          <span className="login-input-label">Username</span>
          <input type="text" className="login-input" id="username" />
        </label>
        <label htmlFor="password" className="login-input-wrapper">
          <span className="login-input-label">Password</span>
          <input type="password" className="login-input" id="password" />
        </label>
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Log in
        </button>
        <span className="forgot-password">Lost your password?</span>
      </form>
    </>
  );
};

export default Login;
