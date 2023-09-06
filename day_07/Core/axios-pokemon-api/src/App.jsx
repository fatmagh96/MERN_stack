import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
            setPokemons(response.data.results)
        }).catch(err=>{
            console.log(err);
        });}
  return (
    <>
      <fieldset>
        <legend>Axios button</legend>
        <button onClick={e=> getPokemons() }>Fetch Pokemon</button>
      </fieldset>
      <fieldset>
        <legend>Display</legend>
        {pokemons.map((pokemon,idx)=><li key={idx}>{pokemon.name}</li>)}
      </fieldset>
    </>
  )
}

export default App
