import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      height
      weight
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

interface PokemonDetailsData {
  pokemon_v2_pokemon_by_pk: {
    id: number;
    name: string;
    pokemon_v2_pokemonsprites: { sprites: { front_default: string } }[];
    height: number;
    weight: number;
    pokemon_v2_pokemonstats: { base_stat: number; pokemon_v2_stat: { name: string } }[];
    pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
  };
}

export function DetallesPokemon() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<PokemonDetailsData>(GET_POKEMON_DETAILS, {
    variables: { id: parseInt(id!) },
  });

  if (loading) return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img 
          src="/img/mew.gif" 
          alt="Cargando Pokémon" 
          className="loading-image"
        />
        <p className="loading-text">Buscando datos del Pokémon...</p>
      </div>
    </div>
  );
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data!.pokemon_v2_pokemon_by_pk;
  const sprites = pokemon.pokemon_v2_pokemonsprites[0].sprites;
  const image = sprites.front_default;

  const stats = pokemon.pokemon_v2_pokemonstats.map((stat) => ({
    name: stat.pokemon_v2_stat.name,
    value: stat.base_stat,
  }));

  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  return (
    <div className="pokemon-details">
      <h1>{pokemon.name}</h1>
      <img src={image} alt={pokemon.name} />
      <div className="details">
        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>
        <h2>Estadísticas:</h2>
        <ul>
          {stats.map((stat, index) => (
            <li key={index}>
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
        <h2>Tipos:</h2>
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}