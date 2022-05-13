import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/home';
import * as ROUTES from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
