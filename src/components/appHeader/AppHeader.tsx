import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const AppHeader: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppHeader;
