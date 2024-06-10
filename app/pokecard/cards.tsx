/*async function Pokecards ({ pokemonname }) {
    const res = await fetch( 
        `https://pokeapi.co/api/v2/pokemon/${pokemonname}/`
    );
const data = await res.json()

return(
<div>
<section>
<div className="pokedex-overlay">
<div id="pokedex-top">
  <a>
  <img className="exit-bnt" src="/imgandsvg/cross (1).png" />
  </a>
  <div id="pokedex-nr">#004</div>
</div>
<div className="poke-img">
<img className="scroll-left" src="/imgandsvg/scroll.png"></img>
<img id="img"/>
<img className="scroll-right"src="/imgandsvg/scroll.png"></img>
</div>
</div>
</section>


<div className="pokedex-middle">
<h2 id="name"></h2>

<div className="typefield">
<h1 className="type" id="type"></h1>
<h1 className="type" id="type2"></h1>
</div>

<div className="measurment">
  <div className="weight column">
    <div id="weight"></div>
    <span className="opacity">Weight</span>
  </div>

  <div className="height column">
    <div id="height"></div>
    <span className="opacity">Height</span>
  </div>
</div>

<div className="stats">
  <div className="stats-top">
    <h2>Base stats</h2>
  </div>

  <div className="hp rows">
    <div className="stats-attribute"><div>HP</div></div>
    <div id="hp" className="stats-value"></div>
    <div  className="progress">
    <div id="progressbar1" className="progress-bar" role="progressbar"   aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div className="attack rows">
    <div className="stats-attribute"><div>Attack</div></div>
    <div id="attack" className="stats-value"></div>
      <div className="progress">
        <div id="progressbar2" className="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  </div>

  <div className="defense rows">
    <div className="stats-attribute"><div>Defense</div></div>
    <div id="defense" className="stats-value"></div>
      <div className="progress">
        <div id="progressbar3" className="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>


    <div className="sp-attack rows"> 
        <div className="stats-attribute"><div>Sp. Attack</div></div>
        <div id="sp.at" className="stats-value"></div>
      <div className="progress">
        <div id="progressbar4" className="progress-bar" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="sp-defense rows">
        <div className="stats-attribute"><div>Sp. Defense</div></div>
        <div id="sp.df" className="stats-value"></div>
      <div className="progress">
        <div id="progressbar5" className="progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="speed rows">
        <div className="stats-attribute"><div>Speed</div></div>
        <div id="speed" className="stats-value"></div>
      <div className="progress">
        <div id="progressbar6" className="progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
</div>
</div>)
}*/