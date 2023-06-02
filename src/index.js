import App from "./App";
import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./Components/reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/shared-style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
