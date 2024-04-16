import { useState, useEffect } from 'react';
import axios from 'axios';

interface PokemonDetails {
    height: number;
    weight: number;
    baseExperience: number;
}

interface Pokemon {
    name: string;
    types: string[];
    picture: string;
    details: PokemonDetails;
    locations: string[];
}

const usePokemon = (pokemonUrl: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);

            try {
                const response = await axios.get(pokemonUrl);
                const { name, types, sprites, height, weight, base_experience, location_area_encounters } = response.data;
                const locationResponse = await axios.get(location_area_encounters);
                const locations: string[] = locationResponse.data
                .map((locationInfo: { location_area: { name: string } }) => {
                    return locationInfo.location_area.name; 
                });
                const uniqueLocations = Array.from(new Set(locations));
                setPokemon({
                    name,
                    types: types.map((type: { type: { name: string } }) => type.type.name),
                    picture: sprites.front_default,
                    details: {
                        height,
                        weight,
                        baseExperience: base_experience,
                    },
                    locations: uniqueLocations,
                });
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [pokemonUrl]);

    return { pokemon, loading, error };
};

export default usePokemon;
