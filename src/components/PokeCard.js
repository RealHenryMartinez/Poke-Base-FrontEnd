
import React from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/PokeCardStyle.css';
import pfp from '../assets/images/PokemonRed.webp';
import typeIcon from '../assets/images/FireIcon.png';
import PokemonImage from '../assets/images/Charmander.png';
import PokeballImage from '../assets/images/Pokeball.png';

function pokemonCard() {
    return (
        <div class="poke-card-holder">
            <div class="icon-wrapper">
                <img
                 src={pfp} 
                 class="pfp" 
                 alt="userProfilePicture"
                />
                <p class="pokemon-name">
                    Charmander
                </p>
                <img
                src={typeIcon}
                class="type-icon" 
                alt="Element"
                />
            </div>
            <img
                src={PokeballImage}
                class="pokeball-image"
                alt="pokeball"
            />
            <img
                src={PokemonImage}
                class="pokemon-img"
                alt="pokemonImage"
            />
        </div>
    )
};

// code for the test API code -> change it so it could match the styles above
/*
const PokeCard = ({ pokemon }) => {

  console.log(pokemon)
  return (
    <>
      <Card
        className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded"
        style={{ border: 'none' }}
      >
        <Link to={`/pokemon/${pokemon.id}`}>
          <Card.Img
            style={{ width: '8rem' }}
            src={pokemon.sprites.front_default}
            variant="top"
          />
        </Link>
        <Card.Body
          className={`${pokemon.types[0].type.name} rounded text-white`}
        >
          <Link to={`/pokemon/${pokemon.name}`} className="link-name">
            <Card.Title as="div" >
              <strong>
                
                #{pokemon.id}{' '}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
*/
export default PokeCard; 

