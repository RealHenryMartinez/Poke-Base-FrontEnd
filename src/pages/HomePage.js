import '../styles/HomePageStyle.css'
import PokemonCard from '../components/PokeCard'
import SideBar from '../components/SideBar'
import Loader from '../components/Loader'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from '../components/PokeCard'
import { Row, Col } from 'react-bootstrap'

function HomePage() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemonList = async () => {
    console.log('get pokemon')
    let pokemonArray = []
    for (let i = 1; i <= 151; i++) {
      const response = await getPokemonData(i);
      pokemonArray.push(response.data)
    }
    console.log(pokemonArray)
    setPokemon(pokemonArray)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <div className="App" >

      <SideBar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p id="app-title">PokeBase</p>

      <>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            {pokemon.map((p) => (
              <div className="card-wrapper" key={p.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                <PokeCard pokemon={p} />
              </div>
            ))}
          </Row>
        )}
      </>
      
        {/* <div className="card-wrapper">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div> */}
  
    </div>
  )
}

export default HomePage
