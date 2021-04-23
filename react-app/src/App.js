import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Footer from "./components/FootBar";
import Home from "./components/pages/home";
import Movie from "./components/pages/movies";
import Meeting from "./components/pages/meetings";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/auth";
import * as sessionActions from "./store/auth";


function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // eslint-disable-next-line
  const [sessionUser, setSessionUser] = useState({});

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setSessionUser(user);
        setAuthenticated(true);
        dispatch(sessionActions.restoreUser());
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {authenticated && (
        <NavBar
          setAuthenticated={setAuthenticated}
        />
      )}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/movies" exact={true} authenticated={authenticated}>
          <Movie />
        </ProtectedRoute>
        <ProtectedRoute path="/meetings/" exact={true} authenticated={authenticated}>
          <Meeting />
        </ProtectedRoute>
      </Switch>
      {authenticated && (
        <Footer
          setAuthenticated={setAuthenticated}
        />
        )}
    </>
  );
}

export default App;
