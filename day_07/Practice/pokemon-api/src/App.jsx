import { useState } from 'react'

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  const getPokemons = () => {fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
            setPokemons(response.results)
        }).catch(err=>{
            console.log(err);
        });}
  return (
    <>
      <fieldset>
        <legend>fetch button</legend>
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
