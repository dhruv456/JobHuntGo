import React, { useEffect, useState } from "react";
import AppLayout from "./layouts/app-layout";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import { RouterProvider } from "react-router-dom";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import Job from "./pages/job";
import MyJobs from "./pages/my-jobs";
import PostJob from "./pages/post-job";
import SavedJob from "./pages/saved-job";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import supabase from "./Utils/supabase";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/job-listing",
        element: <JobListing />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJob />,
      },
    ],
  },
]);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      {/* <ul>
        {instruments.map((instrument) => (
          <li key={instrument.name}>{instrument.name}</li>
        ))}
      </ul> */}
    </ThemeProvider>
  );
}

export default App;
