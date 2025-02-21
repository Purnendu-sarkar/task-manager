import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./providers/AuthProvider.jsx";
import Main from "./routes/Main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* <App /> */}
        <Main></Main>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
