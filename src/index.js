import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme(themeSettings("light"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
