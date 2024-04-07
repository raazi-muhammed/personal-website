import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/system";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="bg-background text-foreground dark">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </main>
        </NextUIProvider>
    </React.StrictMode>
);
