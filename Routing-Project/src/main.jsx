import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import Cartcontext from "./context/Cartcontext.jsx";
createRoot(document.getElementById("root")).render(
  <Cartcontext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Cartcontext>,
);
