import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import { json } from 'react-router-dom';







function PokemonCard(){


    const [pokemonArray, setPokemonArray] = useState([]);
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`)
        fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}`)
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => {
                console.log(json.data)
                setPokemonArray(json.data)
            })
            .catch(err => console.log(err))
      }

      return (
        
        <>
        <form onSubmit={handleSubmit}>
          <label>Enter Pokemon name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
        <div>
        <h1 style={{
                    borderBottom: 'solid'
                 }}>Pokemon Card List</h1>
        {pokemonArray[0] ? (
            <>
        {pokemonArray.map(singlePokemonCard => {
            {/* console.log(singlePokemonCard.id); */}
        return(
         <div>
         
                <div>
                {singlePokemonCard.tcgplayer ? (
                 <a href={singlePokemonCard.tcgplayer.url} target="_blank">Sell price </a>
                 ) : <p>No sell price</p>}
                </div>
                <p>Card Id: {singlePokemonCard.id}</p>
                 <img src={singlePokemonCard.images.small} alt={singlePokemonCard.name} height={250} />
                 <p style={{
                    borderBottom: 'solid'
                 }}><h2>{singlePokemonCard.name}</h2></p>
                 {/* <button onClick={singlePokemonCard.id}>Save Card</button>            */}
         </div>
                 )
             })}
             </>) : null}
             
        </div>
</>
      )
    };

//     useEffect(() => {
//         fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}`)
//         .then(res => res.json())
//         // .then(json => console.log(json))
//         .then(json => {
//             console.log(json.data)
//             setPokemonArray(json.data)
//           })
//         .catch(err => console.log(err))
//     }, []);

//     return(
//         <div>
//             <h1>Pokemon Card List</h1>
//             {pokemonArray.map(singlePokemonCard => {
//                 return(
//                     <div>
//                         <div>
//                         <a href={singlePokemonCard.tcgplayer.url}>Sell price </a>
//                         </div>
//                         <img src={singlePokemonCard.images.small} alt={singlePokemonCard.name} height={250} />
//                         <p>{singlePokemonCard.name}</p>
                        
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

export default PokemonCard