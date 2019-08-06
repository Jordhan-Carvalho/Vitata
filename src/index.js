import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import history from "./utils/history";

// Amplify config
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

ReactDOM.render(
  <Router history={history}>
    <CssBaseline />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
