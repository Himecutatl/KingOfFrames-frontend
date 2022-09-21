import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams, BrowserRouter } from 'react-router-dom'
import CharacterPages from './pages/CharacterPages.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar';

function App() {
  // const [state, setState] = useState()
  const [characters, setCharacters] = useState([])
  // const [movelist, setMovelist] = useState([])




useEffect(() => {
  console.log('useEffect Ran!')
  fetch('http://localhost:8000/characters/')
  .then(res => res.json())
  .then(res => {
    setCharacters(res)
    return res
  }).then(res => console.log(res))
}, []);

  return (
    <div className="App">
      <NavBar />
          <Routes>
          <Route path='/character/:id' element={<CharacterPages />}/>
          <Route path='/' element={<Home />} />
          </Routes>
          
    </div>
  );
}

export default App;
