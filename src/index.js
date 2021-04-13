import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/normalize.css";
import "./sass/styles.scss";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
