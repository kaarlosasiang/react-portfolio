import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import MainLayout from "./layouts/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
