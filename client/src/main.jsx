import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DocumentProvider } from "./contexts/documents.context";
import { UserProvider } from "./contexts/user.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DocumentProvider>
          <App />
        </DocumentProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
