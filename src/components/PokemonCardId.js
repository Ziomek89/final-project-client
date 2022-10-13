import { useState, useEffect } from 'react';

function PokemonCardId(){

    const [pokemonName, setPokemonName] = useState(null);
    const [id, setId] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The id you entered was: ${id}`)
        fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => {
                console.log(json.data)
                setPokemonName(json.data)
            })
            .catch(err => console.log(err))
      }

    return(
        <>
        <form onSubmit={handleSubmit}>
          <label>Enter Pokemon Id:
            <input 
              type="text" 
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
        <div>
        <h1>Pokemon Card</h1>
        {
            pokemonName && (
                <>
                <div>
        <p>{pokemonName.name}</p>
        <img src={pokemonName.images.small} alt={pokemonName.name} height={250}/>
        </div>
        <a href={pokemonName.tcgplayer.url} target="_blank">Sell Price</a></>
        
             
        
            )
        }
        </div>
    </>
    )

}

export default PokemonCardId