import '../styles/HomePageStyle.css'
import '../styles/PokemonPageStyle.css'
import '../styles/PokeCardStyle.css'

import Loader from '../components/Loader'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from '../components/PokeCard'
import { Row } from 'react-bootstrap'

function HomePage() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  // getting pokemon icons and making new ones

  useEffect(() => {
    console.log("test");
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        
     
        const data = await axios.get('http://localhost:4020/poke-cards');
        console.log("success");
        console.log(data);
        setPokemon(data.data.payload);
        setLoading(false)

      } catch (e) {
        console.log(e);
      }
    }

    // call method
    fetchData();
  }, []);
  


  return (
    <div encType="multipart/form-data">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p id="app-title">PokeBase</p>

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
              
              `
            }
                  id="poke-card-holder"
                  key={i}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <PokeCard  pokemon={p} index={i} />
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
