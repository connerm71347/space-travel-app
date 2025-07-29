//Router
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//Pages
import Spacecrafts from "../pages/spacecraft/SpacecraftPage";
import Home from "../pages/HomePage";
import SpacecraftsDetails from "../pages/spacecraft/SpacecraftsDetailsPage";
import NotFound from "../pages/NotFound";
import PlanetsPage from "../pages/PlanetsPage";

//Layouts
import RootLayout from "../layouts/RootLayout";
import SpacecraftLayout from "../layouts/SpacecraftLayout";
import Construct from "../pages/spacecraft/ConstructPage";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="spacecraft" element={<SpacecraftLayout />}>
        <Route index element={<Spacecrafts />} />
        <Route path="construct" element={<Construct />} />
        <Route path=":id" element={<SpacecraftsDetails />} />
      </Route>
      <Route path="planets" element={<PlanetsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default AppRouter;
