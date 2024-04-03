import { useState, useEffect } from 'react';

interface PokemonApiResponse {
  results: PokemonResult[];
}

interface PokemonResult {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  url: string;
}

const URL = 'https://pokeapi.co/api/v2/pokemon';

const usePokemonRequest = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: PokemonApiResponse = await response.json();
        const modifiedData: Pokemon[] = data.results.map((pokemonResult) => ({
          name: pokemonResult.name,
          url: pokemonResult.url,
        }));
        setPokemonData(modifiedData);
      } catch (error) {
        setError((error as Error).message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, pokemonData };
};

export default usePokemonRequest;
