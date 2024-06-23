import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>404</h1>,
      children:[
        {
            path:"/",
            element: <Home/>
        }
      ]
    },
  ]);