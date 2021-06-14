<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducers from "./store/reducers/index";
import Themes from "./themes";
import { ThemeProvider } from "@material-ui/styles";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducers from './store/reducers/index'
import Themes from './themes'
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
>>>>>>> 3f84e078b8ee2bd0d3b04ea36ea726cef29a05a6

const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
