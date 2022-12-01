import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import App from "../src/components/App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router hashType="slash">
      <App />
    </Router>
  </StrictMode>
);