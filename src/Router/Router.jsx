import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../Component/Register & login/Login";
import Register from "../Component/Register & login/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

export default router;