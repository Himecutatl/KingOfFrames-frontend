import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Home.css'


const Home = () => {

const [characters, setCharacters] = useState([])

useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/characters/')
    .then(res => res.json())
    .then(res => {
      setCharacters(res)
      return res
    }).then(res => console.log(res))
  }, []);

//   const setUrl = (characterId) => {
//     // window.location.href= `http://localhost:3000/character/${id}`;
//     console.log(characterId)
// }

  return (
    <div class='gallery'>
        
          {characters.map((c) => {
            return (
                // <button onClick={(c.id) => setUrl(c.id)}>{c.name}</button>
                
                <Link to={`/character/${c.character_id}`}>
                <div><img src={c.thumbnail} alt={c.name}/></div>
                </ Link>
              
            )        
             }
          )}
      </div>
  )
}

// return (
//     // <button onClick={(c.id) => setUrl(c.id)}>{c.name}</button>
//     <Link to={`/character/${c.character_id}`}>
//     <button>{c.name}</button>
//     </ Link>

// )

export default Home;