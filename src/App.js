import "./App.css";
import './styles/PostingPokemonStyles.css'
import React from "react";
import HomePage from "./pages/HomePage";
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PokemonPage from "./pages/PokemonPage";
import PostingPokemonPage from "./pages/PostingPokemonPage";
import TestPosting from "./pages/TestPosting";

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    <>
      
      <BrowserRouter>
      <SideBar />
        <Routes>
          
          <Route exact path='/' index element={<HomePage />} />

          <Route path='/pokemon/:id' element={<PokemonPage />}/>

          <Route path='/submit-entry' element={<PostingPokemonPage />} />
          <Route path='/submit-test' element={<TestPosting />} />


          <Route path="*" element={<Navigate to="" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
