import '../styles/HomePageStyle.css'
import '../styles/PokemonPageStyle.css'
import '../styles/PokeCardStyle.css'

import Loader from '../components/Loader'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from '../components/PokeCard'
import { Row } from 'react-bootstrap'

function HomePage() {
  // data of the home page and changes the state when the page is loaded from the axios get request
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  // getting pokemon icons and making new ones

  useEffect(() => {
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        const data = await axios.get('http://localhost:4020/poke-cards')
        setPokemon(data.data.payload)
        setLoading(false)
      } catch (e) {}
    }

    // call the async function
    fetchData()
  }, [])

  return (
    <div encType="multipart/form-data">
      <p id="app-title">PokeBase</p>

      {/* Checking if the data is received, load the page and if not, wait until it finally loads */}
      <>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <div className="card-wrapper">
              {pokemon.map((p, i) => (
                <div
                  className={`
              ${p.pokemonTypeOne}
              
              `}
                  id="poke-card-holder"
                  key={i}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  {/* Passing in props containing the data of pokemon state from the get request */}
                  <PokeCard pokemon={p} index={i} />
                </div>
              ))}
            </div>
          </Row>
        )}
      </>
    </div>
  )
}

export default HomePage
