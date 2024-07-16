import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import AuthProvider from "./providers/AuthProvider";
import SocketProvider from "./providers/SocketProvider";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <SocketProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SocketProvider>
    </AuthProvider>
  </Router>
);
