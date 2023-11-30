import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider} from '@reduxjs/toolkit/query/react';
import { oompaLoompaApi } from "./service/oompaLoompaApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={oompaLoompaApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
