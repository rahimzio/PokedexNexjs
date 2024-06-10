import { useEffect, useState } from 'react';
import  '@styles/globals.css';
// Define the Card component, receiving `pokemon` and `openModal` as props
export default function Card({ pokemon, openModal }) {
  // State to hold detailed Pokémon data
  const [pokemonData, setPokemonData] = useState(null);
  // State to hold any error that occurs during data fetching
  const [error, setError] = useState(null);

  // useEffect hook to fetch Pokémon data when the component mounts or when `pokemon.url` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokemon.url); // Fetch data from the Pokémon API
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle network errors
        }
        const data = await response.json(); // Parse the JSON response
        setPokemonData(data); // Update state with fetched data
      } catch (error) {
        console.error('Fetch error: ', error); // Log any errors to the console
        setError(error.message); // Update state with error message
      }
    };
    fetchData(); // Call the fetchData function
  }, [pokemon.url]); // Dependency array ensures this effect runs when `pokemon.url` changes

  // Render an error message if an error occurred during data fetching
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render nothing while data is still being fetched
  if (!pokemonData) return null;

  // Create spans for each Pokémon type
  const typeSpans = pokemonData.types.map((type) => (
    <span key={type.type.name} className={`type ${type.type.name}`}>
      {type.type.name.toUpperCase()}
    </span>
  ));

  return (
    // Main card element with click handler to open modal with detailed data
    <div
      onClick={() => openModal(pokemonData)}
      className={`pokemon-card-element flex-center ${pokemonData.types[0].type.name}`}
    >
      <div className="pokemon-card-header headlines flex-space-around">
        <span>#{pokemonData.id}</span> {/* Display Pokémon ID */}
        <span>{pokemonData.name.toUpperCase()}</span> {/* Display Pokémon name */}
      </div>
      <div className="pokemon-card-main flex-center">
        <img
          src={pokemonData.sprites.other['official-artwork'].front_default}
          alt={pokemonData.name}
        /> {/* Display Pokémon image */}
      </div>
      <div className="pokemon-card-footer flex-space-around type">{typeSpans}</div> {/* Display Pokémon types */}
    </div>
  );
}