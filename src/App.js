import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          {/* <Route path="/hi-scores" element={<HighScores />} />
          <Route path="/update-scores" element={<UpdateScores />} /> */}
          
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
