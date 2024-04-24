// pokemonInterfaces.ts
export interface PokemonDetails {
    height: number;
    weight: number;
    baseExperience: number;
}

export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    image: string;
    details: PokemonDetails;
    url:string;
    pokemonSound:string;
    locations: string[];
    abilities: string[];
}
