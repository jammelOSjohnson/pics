import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// reference root element
const el = document.getElementById("root");

// create the root
const root = createRoot(el);

// render app component inside root
root.render(<App />);
