import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../styles/PokemonPageStyle.css'

// Components
import Loader from '../components/Loader'

const PokemonPage = () => {
  // gets pokemon parameter which is the ID of the url
  const params = useParams()

  console.log(params)

  const [pokemonDetails, setPokemonDetails] = useState()
  const [loading, setLoading] = useState(true)

  const id = params.id

  const getPokemon = async (id) => {
    const details = await getPokemonData(id)
    setPokemonDetails(details.data)
    console.log(details.data)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    
  }


  useEffect(() => {
    async function fetchData(id) {
      try {
        const data = await axios.get(`http://localhost:4020/poke-cards/${id}`)
        setPokemonDetails(data.data.payload)
    console.log(data)
    setLoading(false)

      }
      catch (e) {
        console.log(e)

      }
    }
    fetchData(id)
  }, [])

  console.log(pokemonDetails);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white"
              style={{ border: 'none' }}
            >
              <Link to={`/poke-cards/${pokemonDetails._id}`}>
                <Card.Img
                  style={{ width: '15rem' }}
                  src={pokemonDetails.photo}
                  variant="top"
                />
              </Link>
              <Card.Body
                className={`${pokemonDetails.pokemonTypeOne} rounded text-white`}
              >
                <Link
                  to={`/poke-cards/${pokemonDetails._id}`}
                  className="link-name"
                >
                  <Card.Title as="div">
                    <strong>
                      #{pokemonDetails._id}{' '}
                      {pokemonDetails.pokemonName +
                        pokemonDetails.pokemonName}
                    </strong>
                  </Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="p-3 rounded text-center shadow p-3 mb-5 bg-white"
              style={{ border: 'none' }}
            >
              <Card.Body>
                {/* <Card.Text> */}
                
                <Row>
                  <Col>
                    <Card.Img
                      style={{ width: '15rem' }}
                      src={pokemonDetails.photo}
                    />
                    <Card.Text>Normal Form</Card.Text>
                  </Col>
                  <Col>
                    <Card.Img
                      style={{ width: '15rem' }}
                      src={pokemonDetails.photo}
                    />
                    <Card.Text>Shiny Form</Card.Text>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div
                      className="px-4 py-1 rounded"
                      style={{ border: '1px black solid' }}
                    >
                      Abilities
                      <p>{pokemonDetails.foodOne}</p>
                    </div>
                  </Col>
                </Row>
                
                {/* </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default PokemonPage;