// import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/Main";
import MainView from "../views/Main";

export default function Main() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainView />} />
      </Route>
    </Routes>
  );
}
