import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-emz287qsrkzdow6m.us.auth0.com"
      clientId="8VsYacXnvfUu9QQKOmIki1mFhSuPMYaW"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="https://dev-emz287qsrkzdow6m.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
