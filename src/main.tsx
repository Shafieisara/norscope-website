
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { PasswordProtection } from "./components/PasswordProtection";

createRoot(document.getElementById("root")!).render(
  <PasswordProtection>
    <App />
  </PasswordProtection>
);
