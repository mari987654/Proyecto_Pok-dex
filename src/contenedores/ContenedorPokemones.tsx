import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Pokemon } from '../componentes/Pokemon';
import { GET_POKEMONS } from '../graphql/obtener-pokemones';

interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: { sprites: { front_default: string } }[];
  pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
}

export function ContenedorPokemones() {
  const { loading, error, data } = useQuery<{ pokemon_v2_pokemon: Pokemon[] }>(GET_POKEMONS);
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');


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

  const allPokemons = data!.pokemon_v2_pokemon;

  const filteredPokemons = allPokemons.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesType = typeFilter === '' || pokemon.pokemon_v2_pokemontypes.some(
      (type) => type.pokemon_v2_type.name === typeFilter
    );
    return matchesName && matchesType;
  });

  const itemsPerPage = 24;
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  const currentPokemons = filteredPokemons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleTypeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(event.target.value);
    setPage(1);
  };

  const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
    setPage(1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Link to="/" className="home-link">

      </Link>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <select value={typeFilter} onChange={handleTypeFilterChange}>
          <option value="">Todos los tipos</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Eléctrico</option>
          <option value="psychic">Psíquico</option>
          <option value="ice">Hielo</option>
          <option value="fighting">Lucha</option>
          <option value="poison">Veneno</option>
          <option value="ground">Tierra</option>
          <option value="flying">Volador</option>
          <option value="bug">Bicho</option>
          <option value="rock">Roca</option>
          <option value="ghost">Fantasma</option>
          <option value="dragon">Dragón</option>
          <option value="dark">Siniestro</option>
          <option value="steel">Acero</option>
          <option value="fairy">Hada</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      <div className="container">
        {currentPokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="pokemon-link">
            <Pokemon pokemon={pokemon} />
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
        onClick={goToPreviousPage}
        disabled={page === 1} 
        className="pagination-button"
        >
          Anterior
        </button>
        <span className="page-indicator">Página {page} de {totalPages}</span>
        <button
          onClick={goToNextPage}
          disabled={page === totalPages || totalPages === 0} 
          className="pagination-button"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}