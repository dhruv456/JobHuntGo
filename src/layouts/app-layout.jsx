import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
}

export default AppLayout;
