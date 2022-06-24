import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(pokemons => setPokemons(pokemons));
  }, []);

  const pokemonsToDisplay = () => {
    if (search !== "") {
      return pokemons.filter(pokemon => {
        return pokemon.name.toUpperCase().includes(search.toUpperCase());
      })
    } else {
      return pokemons;
    }
  }

  function handlePokemonSubmit(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonSubmit={handlePokemonSubmit} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay()} />
    </Container>
  );
}

export default PokemonPage;
