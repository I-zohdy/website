import React from "react";
import { createRoot } from "react-dom/client";
import MIApp from "./mi_fr_app.jsx";
import "./index.css";

const defaultLevel = import.meta.env.VITE_DEFAULT_LEVEL || "level1";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MIApp defaultLevel={defaultLevel} />
  </React.StrictMode>
);
