import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";
import "@fontsource/roboto";
import "@fontsource/roboto-slab";
import { createGlobalStyle } from "styled-components";
import { TodoStorage } from "./providers/storage";

const Styles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  .roboto-slab {
    font-family: 'Roboto Slab', serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Styles />
    <TodoStorage>
      <App />
    </TodoStorage>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
