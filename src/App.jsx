import { useEffect, useState } from 'react'
import './App.css'
import Details from './components/Details.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(r => r.json())
      .then(d => setPokemonList(d.results))
  }, []);

  const showPokemon = (url) => {
    fetch(url)
      .then(r => r.json())
      .then(d => setPokemon(d));
  }

  return <>
    <ul>
      { pokemonList.length !== 0 && pokemonList.map((item, i) => 
        <li key={i}>{ item.name } <button onClick={() => showPokemon(item.url)}>Détails</button></li>
      ) }
    </ul>
    { pokemon && <Details {...pokemon}></Details> }
  </>
}

export default App
