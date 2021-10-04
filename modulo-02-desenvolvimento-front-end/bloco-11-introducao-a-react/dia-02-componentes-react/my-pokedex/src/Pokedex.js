import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    // Recebemos do App.js, através da props "pokemons", o nosso array de pokemons.
    // Devemos fazer um map, e nele renderizar o componente <Pokemon>, que receberá
    // por props cada item do array. 
    // Lembre-se: é no componente Pokemon que iremos
    // renderizar todas as informações necessárias para a exibição.
    return (
      <div className='pokedex'>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;
