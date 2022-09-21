import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, Link, useParams } from 'react-router-dom';
import './CharacterPages.css';

const CharacterPages = () => {

const { id } = useParams(); 

const [characters, setCharacters] = useState([])

useEffect(() => {
    console.log('useEffect Ran!')
    fetch(`http://localhost:8000/characters/${id}`)
    .then(res => res.json())
    .then(res => {
      setCharacters(res)
      return res
    }).then(res => console.log(res))
  }, []);
  return (
      <ul>
        <h2>{characters.name}</h2>
          {characters.move_list?.map((c) => {
            return (
              <>
              <div class="container">
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Damage</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Stun</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Startup</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Advantage</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Comment</a></div>
		</div>
    
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">{c.move}</div>
				<div class="table-data">{c.damage}</div>
				<div class="table-data">{c.stun}</div>
				<div class="table-data">{c.startup}</div>
				<div class="table-data">{c.guard_adv}</div>
				<div class="table-data">{c.comment}</div>
			</div>
		</div>	
	</div>
</div>
              
                {/* <div className='frameHeader'>
                <li></li>
                </div>
                
                <div className='table'>7
                <li>Move: {c.move}, Damage: {c.damage}, Stun: {c.stun}, Startup: {c.startup}, Guard Advantage: {c.guard_adv}, Comment: {c.comment}</li>
                </div> */}
                </>
            )             
             }
          )}
      </ul>
      
  )
}

export default CharacterPages;