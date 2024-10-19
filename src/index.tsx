// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

// Imports
import App from "./app/index";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
