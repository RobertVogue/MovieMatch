import React, { useState } from "react";
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/auth';
import './index.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/movies/" />;
  }

  return (
    <div className="Big">
      <div className="signup-form">
        <form onSubmit={onSignUp} autoComplete="off">
          <h1>Sign Up</h1>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              autoComplete="off"
            ></input>
          </div>
          <button type="submit" onSubmit={onSignUp}>Sign Up</button>
        </form>
        <div className="login-link-box">
          <div className="login-link-text">
            Have an account?&nbsp;
          <NavLink to="/login" className="signUp" style={{ textDecoration: 'none' }}>
              Log in
          </NavLink>
          </div>
        </div>
      </div>
      <div className="logggo"></div>
    </div>
  );
};

export default SignUpForm;
