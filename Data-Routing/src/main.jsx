import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoues from "./routes/AppRoues.jsx";
import AllContext from "./context/AllContext.jsx";
import {ToastContainer} from 'react-toastify'
createRoot(document.getElementById("root")).render(
    <AllContext>
        <AppRoues />
        <ToastContainer/>
    </AllContext>
);
