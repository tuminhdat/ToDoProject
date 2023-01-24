import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // the StrictMode is call to re-render every component so when using useEffect,
  // the component with useEffect will render and re-render and finally render again
  // it will make 3 times render which cause problem with useEffect when we want to fetch data
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <App />
);
