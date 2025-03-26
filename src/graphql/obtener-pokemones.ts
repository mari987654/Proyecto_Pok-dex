import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(limit: 1302) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;