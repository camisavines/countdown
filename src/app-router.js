import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/home';
import SpringBreak from './pages/springbreak';
import Work from './pages/work';
import * as ROUTES from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SPRING} element={<SpringBreak />} />
        <Route exact path={ROUTES.WORK} element={<Work />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
