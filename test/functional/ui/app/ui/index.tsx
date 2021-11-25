import "./styles.less";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter as Router} from "react-router-dom"

const div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(
  <Router><App /></Router>,
  div,
);
