import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <h1>hoo</h1>,
        },
      ],
    },
  ]);

export default router;