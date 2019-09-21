import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//imported from data.js
import { numbers } from './data.js'
import { operators } from './data.js'
import { specials } from './data.js'

ReactDOM.render(<App />, document.getElementById("root"));
