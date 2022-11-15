import React, { useState } from 'react';
import axios from 'axios';

const PostingPokemonPage = () => {
    const [newUser, setNewUser] = useState(
        {
            username: '',
            pokemonName: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('pokemonName', newUser.pokemonName);
        formData.append('username', newUser.username);


        // putting the form data appended to the new data retrieved and sent to the server
        axios.post('http://localhost:4020/addPokemon', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, username: e.target.value} );
    }

    const pokemonNameChange = (e) => {
      setNewUser({...newUser, pokemonName: e.target.value} );

     }
// it passes through the event and through the array, it will find the new item in the array of files 
    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="username"
                value={newUser.username}
                onChange={handleChange}
            />

            <input 
                type="text"
                name="pokemonName"
                value={newUser.pokemonName}
                onChange={pokemonNameChange}
            />

            <input 
                type="submit"
            />
        </form>
    );
}

export default PostingPokemonPage;