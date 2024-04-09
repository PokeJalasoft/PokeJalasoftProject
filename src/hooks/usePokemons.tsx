import { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
  type: string; 
  image: string;
  url: string;
}

const usePokemons = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const fetchPokemons = async (offset: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const { results } = response.data;

      const pokemonDetailsPromises = results.map(async (result: { url: string }, index: number) => {
        const pokemonResponse = await axios.get(result.url);
        const { name, types, sprites } = pokemonResponse.data;
        const pokemon: Pokemon = {
          id: offset + index + 1,
          name,
          type: types.map((type: { type: { name: string } }) => type.type.name).join(', '),
          image: sprites.front_default,
          url: result.url,
        };
        return pokemon;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);

      setPokemons(pokemons => [...pokemons, ...pokemonDetails]);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(offset);
  }, [offset]);

  const loadMorePokemons = () => {
    setOffset(offset => offset + 20);
  };

  return { pokemons, loading, error, loadMorePokemons };
};

export default usePokemons;