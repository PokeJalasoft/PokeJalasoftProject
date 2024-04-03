import { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  types: string[];
  picture: string;
  details: {
    height: number;
    weight: number;
    baseExperience: number;
  };
}

const usePokemon = (pokemonUrl: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(pokemonUrl);
        const { name, types, sprites, height, weight, base_experience } = response.data;
        setPokemon({
          name,
          types: types.map((type: { type: { name: string } }) => type.type.name),
          picture: sprites.front_default,
          details: {
            height,
            weight,
            baseExperience: base_experience,
          },
        });
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonUrl]);

  return { pokemon, loading, error };
};

export default usePokemon;
