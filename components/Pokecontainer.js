import React from 'react';
import Card from './Card';
import '../styles/globals.css';

// Pokecontainer component receives `pokemonData` and `openModal` as props
const Pokecontainer = ({ pokemonData, openModal }) => {
  return (
    <div className="poke-container">  {/* Container div with className for styling */}
      {/* Map over pokemonData array to create a Card component for each Pokémon */}
      {pokemonData.map((pokemon) => (
        // Each Card receives a unique key, the pokemon object, and the openModal function as props
        <Card key={pokemon.name} pokemon={pokemon} openModal={openModal} />
      ))}
    </div>
  );
};

export default Pokecontainer; 