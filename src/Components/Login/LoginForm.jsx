import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="Logincontainer">
      <form action="" className="form">
        <p>Login</p>
        <div className="inputDiv">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>

        <div className="inputDiv">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>

        <button type="submit" className="login-Btn">
          Login
        </button>

        <div className=" signUp">
          Don't have an account?{" "}
          <a href="/signupnext">
            <u>Sign Up</u>
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
