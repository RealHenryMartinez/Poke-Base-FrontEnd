import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/PokeCardStyle.css'
import '../styles/HomePageStyle.css'

import pfp from '../assets/images/PokemonRed.webp'

import * as GiIcons from 'react-icons/gi'

import PokeballImage from '../assets/images/Pokeball.png'

/*
  Pass in props which contains data from the axios get request data
*/
function PokeCard(props) {
  function alertFunction() {
    alert(`${props.pokemon.pokemonTypeOne}`)
  }

  return (
    <div>
      <div>
        <div className="icon-wrapper">
          <img src={pfp} className="pfp" alt="userProfilePicture" />

          {/* Image and Text link to the pokemon Page containing more information about the pokemon  */}
          <Link to={`/pokemon/${props.pokemon._id}`} className="link-name">
            <p className="pokemon-name">
              <strong>
                {/* Uppercase the pokemon name */}#{props.index} <br />
                {props.pokemon.pokemonName.charAt(0).toUpperCase() +
                  props.pokemon.pokemonName.slice(1)}
              </strong>
            </p>
          </Link>
          <div
            className={`${props.pokemon.pokemonTypeOne}-icon`}
            id="type-icon"
            onClick={alertFunction}
          >
            <GiIcons.GiAbstract008 id="icon" />
          </div>

          {/* Props being used for pokemon type and rendering an icon  */}
          <div
            className={`${props.pokemon.pokemonTypeOne}`}
            // className = "grass"
            id="type-icon"
          ></div>
        </div>

        {/* Regular pokeball image for card style */}
        <img src={PokeballImage} className="pokeball-image" alt="pokeball" />

        {/* Regular text for linking the pokemon to their own page with the ID */}
        <Link to={`/pokemon/${props.pokemon._id}`}>
          {/* The source takes in param data as the front end gets the server to get the photo data from params - Accepts certain file types */}
          <img
            type="file"
            accept=".png, .jpg, .jpeg"
            src={`http://localhost:4020/${props.pokemon.photo}`}
            className="pokemon-img"
            alt="pokemonImage"
            style={{ index: 5 }}
          />
        </Link>
      </div>
    </div>
  )
}

export default PokeCard
