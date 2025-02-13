import React from "react";
import AppLayout from "./layouts/app-layout";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
