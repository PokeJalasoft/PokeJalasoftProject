import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from './PokemonInterfaces';

const fetchPokemonDetails = async (pokemon: Pokemon): Promise<Pokemon> => {
    const response = await axios.get(pokemon.url);
    const { name, types, sprites, height, weight, base_experience, abilities } = response.data;
    const locationResponse = await axios.get(response.data.location_area_encounters);
    const locations: string[] = Array.from(new Set(locationResponse.data.map((locationInfo: { location_area: { name: string } }) => locationInfo.location_area.name)));
    return {
        id: pokemon.id,
        name,
        types: types.map((type: { type: { name: string } }) => type.type.name),
        image: sprites.front_default,
        details: {
            height,
            weight,
            baseExperience: base_experience,
        },
        pokemonSound: pokemon.pokemonSound,
        url: pokemon.url,
        locations,
        abilities: abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
    };
};

const usePokemon = (pokemon: Pokemon | null) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [fetchedPokemon, setFetchedPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemon) return;
            setLoading(true);
            try {
                const pokemonDetails = await fetchPokemonDetails(pokemon);
                setFetchedPokemon(pokemonDetails);
            } catch (err) {
                const errorObj = err instanceof Error ? err : new Error(String(err));
                setError(errorObj);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [pokemon]);

    return { pokemon: fetchedPokemon, loading, error };
};

export default usePokemon;
