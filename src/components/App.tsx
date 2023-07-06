import React from "react";
import { Route, Routes } from "react-router-dom";

// todo Components
import AppHeader from "./appHeader/AppHeader";
import Home from "./home/Home";
import Tweets from "./tweets/Tweets";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHeader />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
};

export default App;
