import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import configureStore from "./store/index";
import * as sessionActions from "./store/auth";
import { SocketContext, socket } from './components/static/SocketProvider';
import App from './App';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketContext.Provider>
    </Provider>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
