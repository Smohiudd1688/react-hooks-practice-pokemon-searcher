import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  const renderPokemons = pokemons.map(pokemon => {
    return <PokemonCard 
              key={pokemon.id}
              name={pokemon.name}
              hp={pokemon.hp}
              frontSprite={pokemon.sprites.front}
              backSprite={pokemon.sprites.back}
            />
  });

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
