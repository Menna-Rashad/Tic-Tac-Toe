import { StrictMode } from "react";
// what is that strictmode? are there other modes?
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App /> 
    {/* self closing tag because it has no content in it */}
  </StrictMode>
);