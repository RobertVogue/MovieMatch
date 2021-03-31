import React from "react";
import { useHistory } from "react-router-dom"
import { logout } from "../../store/auth";
import { useDispatch } from "react-redux";

const LogoutButton = ({setAuthenticated}) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
    setAuthenticated(false);
    history.push('/login/')
  };

  return <button className="Log" onClick={onLogout}> </button>;
};

export default LogoutButton;
