import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
