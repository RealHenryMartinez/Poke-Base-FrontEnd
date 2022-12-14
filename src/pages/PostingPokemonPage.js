import React, { useState } from 'react'
import axios from 'axios'

const PostingPokemonPage = () => {
  // stores users initial state - updates state when user inputs a new value
  const [newUser, setNewUser] = useState({
    username: '',
    pokemonName: '',
    photo: '',
    pokemonCatch: '',
    pokemonTypeOne: '',
    pokemonTypeTwo: '',
    pokemonGender: '',
    pokemonRegion: '',

    foodOne: '',
    foodTwo: '',
    foodThree: '',
  })

  // takes in all the data from the form and posts them through the post request with axios
  const handleSubmit = (e) => {
    e.preventDefault()

    // takes in all the data from the form and posts them through the form Data object
    const formData = new FormData()
    formData.append('photo', newUser.photo)
    formData.append('pokemonName', newUser.pokemonName)
    formData.append('username', newUser.username)

    formData.append('pokemonRegion', newUser.pokemonRegion)
    formData.append('pokemonCatch', newUser.pokemonCatch)
    formData.append('pokemonGender', newUser.pokemonGender)

    // it would be .value because the default receieved value is the attributes rather than the value itself -> specify the value
    // the form name has to match with the schema document value
    formData.append('foodOne', newUser.foodOne.value)
    formData.append('foodTwo', newUser.foodTwo.value)
    formData.append('foodThree', newUser.foodThree.value)


    // types of pokemon
    formData.append('pokemonTypeOne', newUser.pokemonTypeOne.value)
    formData.append('pokemonTypeTwo', newUser.pokemonTypeTwo.value)

    // putting the form data appended to the new data retrieved and sent to the server
    axios.post('http://localhost:4020/addPokemon', formData)
  }

  /* 
    - The data structure here is served to change the default value of the state of newUser from an event triggered by the user's input event
    - Deconstruct the object and change the default value with the e.target.value property
  */
  const handleChange = (e) => {
    setNewUser({ ...newUser, username: e.target.value })
  }

  const pokemonNameChange = (e) => {
    setNewUser({ ...newUser, pokemonName: e.target.value })
  }
  const pokemonRegion = (e) => {
    setNewUser({ ...newUser, pokemonRegion: e.target.value })
  }
  const pokemonCatch = (e) => {
    setNewUser({ ...newUser, pokemonCatch: e.target.value })
  }
  const pokemonGender = (e) => {
    setNewUser({ ...newUser, pokemonGender: e.target.value })
  }
  /*
    Finds the event from the option that is selected from the list and gets its attribute value
  */
  const handleFoodOne = (e) => {
    setNewUser({
      ...newUser,
      foodOne: e.target.options[e.target.selectedIndex].attributes.value,
    })
  }
  const handleFoodTwo = (e) => {

    setNewUser({
      ...newUser,
      foodTwo: e.target.options[e.target.selectedIndex].attributes.value,
    })
  }
  const handleFoodThree = (e) => {
    
    setNewUser({
      ...newUser,
      foodThree: e.target.options[e.target.selectedIndex].attributes.value,
    })

    // handle the types of pokemon with getting the value through an event
  }
  const handlePokemonTypeOne = (e) => {
   
    setNewUser({
      ...newUser,
      pokemonTypeOne: e.target.options[e.target.selectedIndex].attributes.value,
    })
  }
  const handlePokemonTypeTwo = (e) => {
    
    setNewUser({
      ...newUser,
      pokemonTypeTwo: e.target.options[e.target.selectedIndex].attributes.value,
    })
  }

  // it passes through the event and through the array, it will find the new item in the array of files
  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] })
  }


  /* 
  - Lets the user know when the user has uploaded a pokemon
*/
  function submitPrompt() {
    alert('Successfully submitted new Pokemon!')
  }

  return (
    <>
    {/* 
      Takes in multipart/form-data used to submit form data to the server
    */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto}
        />

        {/* Input pokemon info and trainer info */}
        <div className="input-pokemon">
          <input
            type="text"
            placeholder="name"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
          <input
            placeholder="pokemon name"
            type="text"
            name="pokemonName"
            value={newUser.pokemonName}
            onChange={pokemonNameChange}
          />
          <input
            placeholder="pokemon region"
            type="text"
            name="pokemonRegion"
            value={newUser.pokemonRegion}
            onChange={pokemonRegion}
          />
          <input
            placeholder="Where was the pokemon caught?"
            type="text"
            name="pokemonCatch"
            value={newUser.pokemonCatch}
            onChange={pokemonCatch}
          />
          <input
            placeholder="What is the pokemon gender?"
            type="text"
            name="pokemonGender"
            value={newUser.pokemonGender}
            onChange={pokemonGender}
          />
        </div>

        {/* Drop down menus containing data to input to the properties of the object values */}
        <select name="pokemonTypeOne" onChange={handlePokemonTypeOne}>
          <option value="null">Type 1</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="flying">Flying</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
        </select>
        <select name="pokemonTypeTwo" onChange={handlePokemonTypeTwo}>
          <option value="null">Type 2</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="flying">Flying</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
        </select>

        <h1>What kind of food does your Pokemon like?</h1>
        <select name="foodOne" onChange={handleFoodOne}>
          <option value="null">Food #1</option>
          <option value="cupcakes"> cupcakes</option>
          <option value="acorns">acorns</option>
          <option value="mushrooms">mushrooms</option>
          <option value="corn">corn</option>
          <option value="carrots">carrots</option>
          <option value="onions">onions</option>
          <option value="herbs">herbs</option>
          <option value="radishes">radishes</option>
          <option value="apples">apples</option>
          <option value="bananas">bananas</option>
        </select>

        <select name="foodTwo" onChange={handleFoodTwo}>
          <option value="null">Food #2</option>
          <option value="cupcakes"> cupcakes</option>
          <option value="acorns">acorns</option>
          <option value="mushrooms">mushrooms</option>
          <option value="corn">corn</option>
          <option value="carrots">carrots</option>
          <option value="onions">onions</option>
          <option value="herbs">herbs</option>
          <option value="radishes">radishes</option>
          <option value="apples">apples</option>
          <option value="bananas">bananas</option>
        </select>
        <select name="foodThree" onChange={handleFoodThree}>
          <option value="null">Food #3</option>
          <option value="cupcakes"> cupcakes</option>
          <option value="acorns">acorns</option>
          <option value="mushrooms">mushrooms</option>
          <option value="corn">corn</option>
          <option value="carrots">carrots</option>
          <option value="onions">onions</option>
          <option value="herbs">herbs</option>
          <option value="radishes">radishes</option>
          <option value="apples">apples</option>
          <option value="bananas">bananas</option>
        </select>

        {/* initiate the form submission -> alerts the user of when the form is submitted */}
        <input type="submit" onClick={submitPrompt} />
      </form>
    </>
  )
}

export default PostingPokemonPage
