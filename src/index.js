import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
