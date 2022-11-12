import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PokemonPage from "./pages/PokemonPage";

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' index element={<HomePage />} />
          <Route path='/pokemon/:id' element={<PokemonPage />}/>

          {/* <Route path="/hi-scores" element={<HighScores />} />
          <Route path="/update-scores" element={<UpdateScores />} /> */}
          
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
