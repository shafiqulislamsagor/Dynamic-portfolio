import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import DProfile from "../Dashboard/DProfile/DProfile";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }, 
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <DProfile></DProfile>
      }
    ]
  }
]);