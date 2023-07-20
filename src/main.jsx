import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context/GlobalContext.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";
import { TaskProvider } from "./Context/TasksContext.jsx";
import { SelfAwarenessProvider } from "./Context/SelfAwarenessContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ModalProvider>
        <TaskProvider>
          <SelfAwarenessProvider>
            <App />
          </SelfAwarenessProvider>
        </TaskProvider>
      </ModalProvider>
    </AppProvider>
  </React.StrictMode>
);
