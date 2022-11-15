import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SubmitEntryPage from "./pages/SubmitEntryPage";
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

          <Route path='/submit-entry' element={<SubmitEntryPage/>}/>

          <Route path="*" element={<Navigate to="" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
