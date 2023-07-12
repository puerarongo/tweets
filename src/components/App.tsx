import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// todo Components
import AppHeader from "./appHeader/AppHeader";
import Loader from "./loader/Loader";

const Home = lazy(() => import("./home/Home"));
const Tweets = lazy(() => import("./tweets/Tweets"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
