import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <div>Hello home!</div>,
      },
      { path: "/", element: <Navigate to="/home" replace={true} /> },
    ],
  },
]);
