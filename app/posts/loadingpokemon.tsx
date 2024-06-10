import React from 'react';
import './loadingpokemon.css';
const LoadingPokemon: React.FC = () => {
  return (
    <div className="loading-pokemon">
      <img src="/assets/pokeball.png" alt="Loading Pokemon" />
    </div>
  );
};

export default LoadingPokemon;