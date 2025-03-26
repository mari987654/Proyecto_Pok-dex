interface PokemonProps {
  pokemon: {
    name: string;
    pokemon_v2_pokemonsprites: { sprites: { front_default: string } }[];
    pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
  };
}

export function Pokemon({ pokemon }: PokemonProps) {
  const sprites = pokemon.pokemon_v2_pokemonsprites[0].sprites;
  const image = sprites.front_default;

  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  return (
    <div className="pokemon">
      <div className="pokemon_image">
        <img src={image} alt={pokemon.name} />
      </div>
      <div className="pokemon_name">
        <p>{pokemon.name}</p>
      </div>
      {types && (
        <div className="pokemon_types">
          <p><strong>Tipo:</strong> {types.join(', ')}</p>
        </div>
      )}
    </div>
  );
}