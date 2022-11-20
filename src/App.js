import './App.css'
import './styles/PostingPokemonStyles.css'
import React from 'react'
import HomePage from './pages/HomePage'
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages under the page folder
import PokemonPage from './pages/PokemonPage'
import PostingPokemonPage from './pages/PostingPokemonPage'

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    // Routers of the page
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" index element={<HomePage />} />

          <Route path="/pokemon/:id" element={<PokemonPage />} />

          <Route path="/submit-entry" element={<PostingPokemonPage />} />

          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
