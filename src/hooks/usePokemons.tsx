import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from './PokemonInterfaces';

const BASE_SOUND_URL = 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest';

const fetchPokemonDetails = async (result: { url: string }, index: number, offset: number): Promise<Pokemon> => {
    const pokemonResponse = await axios.get(result.url);
    const { name, types, sprites } = pokemonResponse.data;
    return {
        id: offset + index + 1,
        name,
        types: types.map((type: { type: { name: string } }) => type.type.name),
        image: sprites.front_default,
        details: {
            height: 0,
            weight: 0,
            baseExperience: 0,
        },
        url: result.url,
        pokemonSound: `${BASE_SOUND_URL}/${offset + index + 1}.ogg`,
        locations: [],
        abilities: [],
    };
};

const usePokemons = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [totalPokemons, setTotalPokemons] = useState<number>(0);

    const fetchPokemons = async (offset: number) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
            const { results, count } = response.data;
            const pokemonDetailsPromises = results.map(async (result: { url: string }, index: number) => {
                return await fetchPokemonDetails(result, index, offset);
            });
            const pokemonDetails = await Promise.all(pokemonDetailsPromises);
            setPokemons(pokemonDetails);
            setTotalPokemons(count);
            setLoading(false);
        } catch (err) {
            const errorObj = err instanceof Error ? err : new Error(String(err));
            setError(errorObj);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(offset);
    }, [offset]);

    const loadPrevious = () => {
        if (offset - 20 >= 0) {
            setOffset(offset => offset - 20);
        }
    };

    const loadNext = () => {
        if (offset + 20 < totalPokemons) {
            setOffset(offset => offset + 20);
        }
    };

    return { pokemons, loading, error, loadPrevious, loadNext, offset };
};

export default usePokemons;
