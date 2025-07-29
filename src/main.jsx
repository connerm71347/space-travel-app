import React from "react";
import ReactDOM from "react-dom/client";

//styles
import "./index.css";
import "./styles/layout.css";
import "./styles/planets.css";
import "./styles/spacecraft.css";
import "./styles/forms.css";
import "./styles/components.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
