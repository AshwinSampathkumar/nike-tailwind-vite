import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";

function Router() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Router;
