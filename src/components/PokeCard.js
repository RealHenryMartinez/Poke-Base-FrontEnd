import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/PokeCardStyle.css';
import '../styles/HomePageStyle.css';

import pfp from '../assets/images/PokemonRed.webp';
import typeIcon from '../assets/images/FireIcon.png';
import PokeballImage from '../assets/images/Pokeball.png';

import * as GiIcons from "react-icons/gi";


function PokeCard(props) {

  function alertFunction(){
    alert(`${props.pokemon.types[0].type.name}`)
  }  
  
  return (
      <div >
        <div >
            <div className="icon-wrapper">
                <img
                 src={pfp} 
                 className="pfp" 
                 alt="userProfilePicture"
                />

                <Link to={`/pokemon/${props.pokemon.name}`} className="link-name">
                <p className="pokemon-name">
                    <strong>
                
                    #{props.pokemon.id}{' '}
                    {props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}
                  </strong>
                </p>
                </Link>

                <div
                className = {`${props.pokemon.types[0].type.name}-icon`}
                id = "type-icon"
                onClick={alertFunction}
                >
                  <GiIcons.GiAbstract008 id="icon"/>
                </div>
            </div>
            
            <img
                src={PokeballImage}
                className="pokeball-image"
                alt="pokeball"
            />

            <Link to={`/pokemon/${props.pokemon.id}`}>
            <img
                src={props.pokemon.sprites.front_default}
                className="pokemon-img"
                alt="pokemonImage"
            />
            </Link>
        </div>
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

