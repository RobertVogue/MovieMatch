import React, { useState } from "react";
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/auth';
import './index.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, bio, password);
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

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Big">
      <div className="signup-form">
        <form onSubmit={onSignUp}>
          <h1>MovieMatch</h1>
          <h2>Sign Up</h2>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Bio</label>
            <textarea
              type="text"
              name="bio"
              className="textarea"
              onChange={updateBio}
              value={bio}
            ></textarea>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
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
    </div>
  );
};

export default SignUpForm;
