import React, { Component } from "react";
import PropTypes from 'prop-types';

// MINHA IMPLEMENTAÇÃO
// import pokemons from "./data";

// class Pokemon extends Component {
//   render() {
//     return (
//       <div className="pokedex">
//         <h1 className='title'>Pokedex</h1>
//         {pokemons.map((pokemon) => {
//           return (
//             <div className="pokemon-card" key={pokemon.id}>
//               <div className='pokemon-texts'>
//                 <p>{pokemon.name}</p>
//                 <p>{pokemon.type}</p>
//                 <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
//               </div>
//               <img src={pokemon.image} alt={`imagem do ${pokemon.name}`}></img>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }


//REFATORAÇÃO GUIADA PELO GABARITO
class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.
    return (
      <div className='pokemon'>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={ image } alt={`${name} sprit`} />
      </div>
    );
  }
}

Pokemon.proTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired
};

export default Pokemon;
