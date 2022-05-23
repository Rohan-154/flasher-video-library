import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/dataContext";
import { AuthProvider } from "./Context/authContext";
import { ThemeProvider } from "./Context/themeContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <AuthProvider>
    <VideoProvider>
    <App />
    </VideoProvider>
    </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
