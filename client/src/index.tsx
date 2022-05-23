import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import "./styles/_global-imports.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
