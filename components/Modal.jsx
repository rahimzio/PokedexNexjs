import { useEffect, useState } from 'react';

export default function Modal({ pokemon, closeModal }) {
  const [chartData, setChartData] = useState(null);
  const [showStats, setShowStats] = useState(true); // Add showStats state

  useEffect(() => {
    const labels = pokemon.stats.map((stat) => stat.stat.name);
    const data = pokemon.stats.map((stat) => stat.base_stat);

    setChartData({ labels, data });
  }, [pokemon]);

  if (!chartData) return null;

  return (
    <div className="overlay">
      <div className={`pokemon-modal-element ${pokemon.types[0].type.name}`}>
        <div className="pokemon-modal-header headlines flex-space-around">
          <span>#{pokemon.id}</span>
          <span>{pokemon.name.toUpperCase()}</span>
        </div>
        <div className="pokemon-modal-main flex-center">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/img/pokeball.png';
            }}
          />
        </div>
        <div className="pokemon-modal-footer flex-center">
          <div className="flex-center pokemon-modal-footer-nav">
            <span onClick={() => setShowStats(true)} className="nav-links">
              &#128202;
            </span>
            <span onClick={() => setShowStats(false)} className="nav-links">
              &#128203;
            </span>
            <span
              onClick={() => document.getElementById('audio').play()}
              className="nav-links"
            >
              <audio id="audio" src={pokemon.cries.latest}></audio>&#128266;
            </span>
          </div>
          {showStats ? (
            <div id="stats" className="pokemon-modal-stats flex-center">
              <canvas id="myChart"></canvas>
            </div>
          ) : (
            <div id="about" className="pokemon-modal-about flex-center">
              <table className="stats-table">
                <tbody>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{pokemon.height} inch</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{pokemon.weight} pound</td>
                  </tr>
                  <tr>
                    <td>Base Experience</td>
                    <td>{pokemon.base_experience}</td>
                  </tr>
                  <tr>
                    <td>Abilities</td>
                    <td>
                      {pokemon.abilities.map((a) => a.ability.name).join(', ')}
                    </td>
                  </tr>
                  <tr>
                    <td>Moves</td>
                    <td>
                      {pokemon.moves
                        .slice(0, 3)
                        .map((m) => m.move.name)
                        .join(', ')}
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{pokemon.types.map((t) => t.type.name).join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="swipe-buttons flex-center">
          <button onClick={closeModal}>&#x274C;</button>
        </div>
      </div>
    </div>
  );
}
