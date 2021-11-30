import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import RoutingV2 from "./Routingv2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingV2A from "./Routingv2/Routingv2A";
import RoutingV2B from "./Routingv2/Routingv2B";
import RoutingV2C from "./Routingv2/Routingv2C";
import Routing from "./Routingv2/Routing/index";
import HeaderView from "./Routingv2/Components/HeaderView/index";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
