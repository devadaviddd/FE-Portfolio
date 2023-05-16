import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePaths } from "./route";


export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routePaths.public.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
