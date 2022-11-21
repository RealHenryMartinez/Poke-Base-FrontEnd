
import { useState } from 'react'
import axios from 'axios'

const TestPosting = () => {
    const [newUser, setNewUser] = useState({
        photo: ''
    })

    const handlePhoto = (e) => {
        setNewUser({
           ...newUser,
            photo: e.target.files[0]
        });
        console.log(newUser.photo)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);

        console.log(newUser.photo)

        axios.post('http://localhost:4020/addPokemon', formData)
            
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })

    }


  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input 
            type='file'
            accept='.png, .jpg, .jpeg'
            name="photo"
            onChange={handlePhoto}

        />

        <input type='submit' />


    </form>
  )
}

export default TestPosting