import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import '../styles/PokemonPageStyle.css'

// Components
import Loader from '../components/Loader'

const PokemonPage = () => {
  // gets pokemon parameter which is the ID of the url
  const params = useParams()

  // pokemonDetails is the data for the pokemon that has been submitted from the form
  const [pokemonDetails, setPokemonDetails] = useState()
  const [loading, setLoading] = useState(true)

  // setting the variable id to the data from the parameter of the web page
  const id = params.id

  // getting data of the specific one id from the parameter of the web page and setting the state of pokemonDetails as the axios request it gets
  useEffect(() => {
    async function fetchData(id) {
      try {
        // getting data of the specific one id from the parameter of the web page
        const data = await axios.get(`http://localhost:4020/poke-cards/${id}`)
        setPokemonDetails(data.data.payload)

        // after the data has been "fetched", we set the state of setLoading to false and load the data
        setLoading(false)
      } catch (e) {}
    }
    // calling in the function and passing in id from the variable id
    fetchData(id)
  }, [])

  return (
    <>
      {/* When the data is fetched, change the state of loading to false to render the data of the one pokemon */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card.Body
            id="header"
            className={`${pokemonDetails.pokemonTypeOne} rounded text-white`}
          >
              <strong id="pokemon-name">{pokemonDetails.pokemonName}</strong>

          </Card.Body>

          <Card.Body className="pokemon-container">
            <Card.Img
              id="normal-form-image"
              src={`http://localhost:4020/${pokemonDetails.photo}`}
            />
            <div id="pokemon-info-container">
              <div>
                <div className="poke-detail-card">
                  <h3 id="food-header">Top 3 Favorite Foods</h3>
                  <div className="food-list">
                    <p className="food-item">{pokemonDetails.foodOne}</p>
                    <p className="food-item">{pokemonDetails.foodTwo}</p>
                    <p className="food-item">{pokemonDetails.foodThree}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="poke-detail-card">
                  <h3 id="food-header">Region / Gender / Caught</h3>
                  <div className="food-list">
                    <p className="food-item">{pokemonDetails.pokemonRegion}</p>
                    <p className="food-item">{pokemonDetails.pokemonGender}</p>
                    <p className="food-item">{pokemonDetails.pokemonCatch}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </>
      )}
    </>
  )
}

export default PokemonPage
