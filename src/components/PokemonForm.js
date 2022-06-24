import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onPokemonSubmit}) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleHpChange(event) {
    setHp(event.target.value);
  }

  function handleFrontChange(event) {
    setFront(event.target.value);
  }

  function handleBackChange(event) {
    setBack(event.target.value);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          const newPokemon = {
            name: name,
            hp: hp,
            sprites: {
              front: front,
              back: back
            }
          };

          console.log(newPokemon);

          fetch("http://localhost:3001/pokemon",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPokemon)
          })
          .then(response => response.json())
          .then(newPokemon => onPokemonSubmit(newPokemon))
          
          
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid onChange={handleNameChange} label="Name" placeholder="Name" name="name" value={name} />
          <Form.Input fluid onChange={handleHpChange} label="hp" placeholder="hp" name="hp" value={hp} />
          <Form.Input
            fluid
            onChange={handleFrontChange}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
          />
          <Form.Input
            fluid
            onChange={handleBackChange}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
