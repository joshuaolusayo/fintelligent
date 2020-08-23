import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";

import "./style.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
