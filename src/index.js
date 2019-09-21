import React, { useState } from "react";
// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//imported from data.js
import { numbers } from './data.js'
import { operators } from './data.js'
import { specials } from './data.js'

//wrappers
const [numsState, setNumsState] = useState(numbers);
const [opsState, setOpsState] = useState(operators);
const [splsState, setSplsState] = useState(specials);

ReactDOM.render(<App />, document.getElementById("root"));
