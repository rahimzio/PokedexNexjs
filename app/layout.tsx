'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  '@styles/globals.css';
import Nav from '@components/Nav.jsx';
import Pokecontainer from '@components/Pokecontainer.jsx';
import { useEffect, useState } from 'react';
import Card from '@components/Card.jsx';
import Modal from '@components/Modal.jsx';
import fetchPokemon from '@utils/fetchPokemon';
import { Pokemon, PokemonApiResponse, PokemonData } from '@models/types';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // State to hold the list of Pokémon
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(null); // State to hold the selected Pokémon for the modal

  // useEffect hook to load Pokémon data when the component mounts
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data: PokemonApiResponse = await fetchPokemon(); // Fetch Pokémon data from the API
        setPokemons(data.results); // Update state with fetched Pokémon data
      } catch (error) {
        console.error('Error fetching Pokémon data from API, loading from local file:', error); // Log any errors
        // setPokemons(pokenames as PokemonApiResponse); // Optionally load from a local file if the API fails (commented out)
      }
    };
    loadPokemons(); // Call the loadPokemons function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to open the modal with the selected Pokémon's details
  const openModal = (pokemon: PokemonData) => {
    setSelectedPokemon(pokemon);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />

          {children}

        <div id="pokemon-card-container" className="pokemon-card-container">
          {pokemons.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} openModal={openModal} />
          ))}
        </div>
        {selectedPokemon && <Modal pokemon={selectedPokemon} closeModal={closeModal} />}
      </main>
      </body>
    </html>
  );
}