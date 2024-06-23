import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import Contextapp from "./Context/ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contextapp>
      <RouterProvider router={router} />
    </Contextapp>
  </React.StrictMode>
);
