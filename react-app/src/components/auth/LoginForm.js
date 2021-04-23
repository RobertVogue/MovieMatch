import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";
import "./index.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      dispatch(setUser(user));
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleDemoClick = async (e) => {
    const demoUser = await login("demo@aa.io", "password");
    dispatch(setUser(demoUser));
    setAuthenticated(true);
  };

  if (authenticated) {
    return <Redirect to="/movies/" />;
  }

  return (
    <div className="Big">
      <div className="login-form">
        <form onSubmit={onLogin}>
          <h1>Login</h1>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              autoComplete="off"
            />
            <button type="submit" onSubmit={onLogin}>Login</button>
            <div className="err">
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
          </div>
        </form>
        <button type="click" onClick={handleDemoClick} className="demoButton">
          Demo User
        </button>
        <div className="signup-link-box">
          <div className="signup-link-text">
            Don't have an account?&nbsp;
            <NavLink
              to="/signup"
              style={{ textDecoration: "none" }}
              className="signUp"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
      <div className="logggo"></div>
    </div>
  );
};

export default LoginForm;
